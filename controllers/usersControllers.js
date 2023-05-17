const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');

const controller = {
    login: (req, res) => {
        res.render('./users/login', { session: req.session });
    },

    create: (req, res) => {
        const errors = validationResult(req);
        const oldData = req.body;
        if (!errors.isEmpty()) {
          return res.render('./users/register', { session: req.session, errors: errors.mapped(), oldData });
        }
        db.User.findAll()
          .then(function(usuarios) {
            for (let i = 0; i < usuarios.length; i++) {
              if (usuarios[i].email === req.body.email) {
                return res.render('./users/register', {
                  errors: {
                    email: {
                      msg: 'Este email ya está registrado'
                    }
                  }, oldData
                });
              }
            }
            const image = req.file;            
            const userToCreate = {
              name: req.body.firstName + " " + req.body.lastName,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              avatar: image ? image.filename : "default.png",
              roles_id: 2
            };
            
            return db.User.create(userToCreate)
            .then(() => {
              res.redirect('/users/login');
            });
          })

      },

    loginCtrl: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('./users/login', { session: req.session, errors: errors.mapped() });
        }
        const userToLogin = await db.User.findOne({where: {email: req.body.email}})
        try {
                let comparePassword = await bcrypt.compare(req.body.password, userToLogin.password);
                if (comparePassword) {
                    req.session.userLogged = userToLogin;
                    return res.redirect('/');
                }
        }
        catch (error){
            res.send({error})
        }     
        return res.render('./users/login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas'
                }
            }
        })
    },
    logout: (req, res) => {
      req.session.userLogged = undefined;
      res.redirect('./users/login')
    }
    ,
    register: (req, res) => {
        res.render('./users/register')
    },
    contact: (req, res) => {
        res.render('./users/contact')
    },
    control : async (req,res) => {
        const users = await db.User.findAll({include : [{association: "role"}]})
        try {
          res.render('./users/userList', {users})
        }
        catch (error){
          res.send({error})
      }        
    },
    modify : (req,res) => {
      const {id} = req.params;
      db.User.findByPk(id)
      .then(function(user){
        res.render('./users/modify', {user})
      })
    },
    edit : async (req,res) => {
      const {id} = req.params;
        try {
          console.log(id,req.file, req.body);
            await db.User.update({
                ...req.body,
                avatar: req.file ? req.file.filename : this.avatar
            }, {
                where: {
                    id: id
                }
            });
            res.redirect('/users/userList')
        }
        catch (error){
            res.send({error})
        }                
    }
    ,

    destroy: async (req, res) => {
      const {id} = req.params;
      try {
          await db.User.destroy({
              where: {
                  id: id
              }
          });
          res.redirect('/products')        
      }
      catch (error){
          res.send({error})
      }                
  }
}

module.exports = controller

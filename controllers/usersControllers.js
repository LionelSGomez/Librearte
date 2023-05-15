const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersPath = path.join(__dirname, '../database/users.json');
const { validationResult } = require('express-validator');
const db = require('../database/models')

const controller = {
    login: (req, res) => {
        res.render('./users/login', { session: req.session });
    },

    create: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.render('./users/register', { session: req.session, errors: errors.mapped() });
        }        
        let image = req.file;      
        db.User.findAll()
          .then(function(usuarios) {
            for (let i = 0; i < usuarios.length; i++) {
              if (usuarios[i].email === req.body.email) {
                return res.render('./users/register', {
                  errors: {
                    email: {
                      msg: 'Este email ya está registrado'
                    }
                  }
                });
              }
            }
            const image = req.file;            
            const userToCreate = {
              name: req.body.firstName + " " + req.body.lastName,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              avatar: image ? image.filename : "default.png",
              roles_id: 2 //usuario
            };
            
            return db.User.create(userToCreate);
          })
          .then(() => {
            res.redirect('/users/login');
          });
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
                    console.log(comparePassword);
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

    register: (req, res) => {
        res.render('./users/register')
    },

    contact: (req, res) => {
        res.render('./users/contact')
    }
};

module.exports = controller;

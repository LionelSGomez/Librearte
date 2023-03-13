const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const usersPath = path.join(__dirname, '../database/users.json');
const usersFile = fs.readFileSync(usersPath, 'utf-8');
const usersList = JSON.parse(usersFile);
const { validationResult } = require('express-validator');
// const { use } = require('../routers/users');

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
        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: image != undefined ? image.filename : "default.png"
        }

        let userInDB = User.findByField('email', req.body.email)
        if (userInDB) {
            return res.render('./users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            })
        }

        let userCreated = User.create(userToCreate);
        // const image = req.file;
        // const newUser = {
        //     id: usersList.length + 1,
        //     ...req.body,
        //     password: bcrypt.hashSync(req.body.password, 10),
        //     avatar: image != undefined ? image.filename : "default.png"
        // }
        // usersList.push(newUser);
        // const newUserJson = JSON.stringify(usersList, null, ' ');
        // fs.writeFileSync(usersPath, newUserJson);
        res.redirect('/users/login');
    },

    loginCtrl: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('./users/login', { session: req.session, errors: errors.mapped() });
        }

        let userToLogin = User.findByField('email', req.body.email);
        if (userToLogin) {
            let comparePassword = bcrypt.compare(req.body.password, userToLogin.password);
            if (comparePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/');
            } 
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

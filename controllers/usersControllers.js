const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersPath = path.join(__dirname, '../models/users.json');
const usersFile = fs.readFileSync(usersPath, 'utf-8');
const usersList = JSON.parse(usersFile);

const controller = {
    login: (req, res) => {
        res.render('./users/login', { session: req.session });
    },

    create: (req, res) => {
        const image = req.file;
        const newUser = {
            id: usersList.length + 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: image != undefined ? image.filename : "default.png"
        }
        usersList.push(newUser);
        const newUserJson = JSON.stringify(usersList);
        fs.writeFileSync(usersPath, newUserJson);
        res.redirect('/login');
    },

    storeLogin: (req, res) => {
        const { email, password } = req.body;
        req.session.email = email;
        req.session.password = password;
        console.log(req.session);
        res.render('./users/login'), { session: req.session };
    },

    register: (req, res) => {
        res.render('./users/register')
    },

    contact: (req, res) => {
        res.render('./users/contact')
    }
};

module.exports = controller;

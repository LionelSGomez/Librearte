const fs = require('fs');
const path = require('path');

const usersFile = fs.readFileSync(path.join(__dirname, '../models/users.json'), 'utf-8');
const listUsers = JSON.parse(usersFile);

const controller = {
    login: (req, res) => {
        res.render('');
    },

    storeRegister: (req,res) => {
        const {name, adress, email, password} = req.body;
        req.session.name = name;
        req.session.adress = adress;
        req.session.email = email;
        req.session.password = password;
        res.render('../users/login'), { session: req.session };
    },

    register: (req, res) => {
        res.render('../users/register')
    },

    contact: (req, res) => {
        res.render('../users/contact')
    }
};

module.exports = controller;
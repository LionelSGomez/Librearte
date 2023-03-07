const fs = require('fs');
const path = require('path');

const usersFile = fs.readFileSync(path.join(__dirname, '../models/users.json'), 'utf-8');
const listUsers = JSON.parse(usersFile);

const controller = {
    login: (req, res) => {
        res.render('../users/register', { session: req.session });
    },

    storeLogin: (req,res) => {
        const {email, password} = req.body;
        req.session.email = email;
        req.session.password = password;
        console.log(req.session);
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
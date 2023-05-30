const db = require('../database/models');

const controller = {
    index: (req, res) => {
        db.Product.findAll()
        .then(productos => {
            res.render('index', {userLogged: req.session.userLogged, productos});
        })
    },
    login: (req, res) => {
        res.render('./users/login');
    },
    contact: (req, res) => {
        res.render('./users/contact');
    },
    productCart: (req, res) => {
        res.render('./products/productCart');
    },
};

module.exports = controller;
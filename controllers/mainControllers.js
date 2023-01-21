const fs = require('fs');
const path = require('path');

const productFile = fs.readFileSync(path.join(__dirname, '../models/products.json'), 'utf-8');
const listProduct = JSON.parse(productFile);

const controller = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('./users/login');
    },
    register: (req, res) => {
        res.render('./users/register');
    },
    contact: (req, res) => {
        res.render('./users/contact');
    },
    productCart: (req, res) => {
        res.render('./products/productCart');
    },
};

module.exports = controller;
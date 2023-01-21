const fs = require('fs');
const path = require('path');

const productFile = fs.readFileSync(path.join(__dirname, '../models/products.json'), 'utf-8');
const listProduct = JSON.parse(productFile);

const controller = {
    index: (req,res) => {
        res.render('./products/products', {productsList : listProduct});
    },

    productDetail: (req, res) => {
        const {id} = req.params;
        const product = listProduct.find((product) => product.id == id)
        res.render('./products/productDetail', {product} );
    },
    productAdd: (req, res) => {
        res.render('./products/productAdd', {productsList : listProduct});
    },
    productEdit: (req, res) => {
        const {id} = req.params;
        const product = listProduct.find((product) => product.id == id)
        res.render('./products/productEdit', {product});
    },
    
};

module.exports = controller;
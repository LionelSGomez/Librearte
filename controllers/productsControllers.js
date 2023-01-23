const { json } = require('express');
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
        const {id, producto, tipo1, tipo2, tipo3, img1} = req.body;
        const newProduct = {id, producto, tipo1, tipo2, tipo3, img1};
        res.render('./products/productAdd', {productsList : listProduct, newProduct});
        if(newProduct.id && newProduct.producto && newProduct.tipo1){
            newProduct.id = Number(newProduct.id);
            if(newProduct.img1 === ''){
                newProduct.img1 = null;
            }
            listProduct.push(newProduct);

        }
        console.log(listProduct);
    },
    productEdit: (req, res) => {
        const {id} = req.params;
        const product = listProduct.find((product) => product.id == id)
        res.render('./products/productEdit', {product});
    },
    
};

module.exports = controller;
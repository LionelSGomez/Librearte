const fs = require('fs');
const path = require('path');

const productFile = fs.readFileSync(path.join(__dirname, '../models/products.json'), 'utf-8');
const listProduct = JSON.parse(productFile);

function writeFileJson(data) {
    const newProductJson = JSON.stringify(data); //convierto a json
    fs.writeFileSync(path.join(__dirname, '../models/products.json'), newProductJson); //creo o sobreescribo newProducts.json, con el producto creado    
}

function checkEmpty(productToEdit) {
    for (const property in productToEdit) { //itera las propiedades del objeto, si están vacias, serán null
        if (productToEdit[property] == '' || !productToEdit[property]) {
            productToEdit[property] = null;
        }
    }
}

const controller = {
    index: (req, res) => {
        res.render('./products/products', { productsList: listProduct });
    },

    productDetail: (req, res) => {
        const { id } = req.params;
        const product = listProduct.find((product) => product.id == id)
        res.render('./products/productDetail', { product });
    },
    productAdd: (req, res) => {
        res.render('./products/productAdd', { productsList: listProduct });
    },
    store: (req, res) => {
        const images = req.files; //obtengo la/s imagen/es
        const lastIndex = listProduct.length - 1;
        if (req.body.producto) { //condicion de que el formulario no se haya enviado vacio por recargar y que sea el siguiente producto
            const newProduct = {
                id: listProduct[lastIndex].id + 1,
                ...req.body,                
                precio: Number(req.body.precio), //cambio el precio de string a numero
                img1: !images[0] ? "default.png" : images[0].filename,//con if ternario valido si hay imagen, si no hay, pongo una por defecto
                img2: !images[1] ? null : images[1].filename,
                img3: !images[2] ? null : images[2].filename
            }
            
            checkEmpty(newProduct);
            listProduct.push(newProduct); //agrego el producto creado al array
            // const newProductJson = JSON.stringify(listProduct); //convierto a json
            // fs.writeFileSync('./models/products.json', newProductJson); //creo o sobreescribo newProducts.json, con el producto creado
            writeFileJson(listProduct);
        };
        res.redirect('/products');

    },
    productEdit: (req, res) => {
        const productToEdit = listProduct.find((product) => product.id == req.params.id);
        res.render('./products/productEdit', { productToEdit });
    },
    productUpdate: (req, res) => {
        let indexToEdit;
        let productToEdit = listProduct.find((product, index) => {
            if (product.id == req.params.id) {
                indexToEdit = index;
                return true;
            }
            return false;
        });
        productToEdit = {
            ...productToEdit,
            ...req.body
        };
        checkEmpty(productToEdit);
        listProduct[indexToEdit] = productToEdit;
        writeFileJson(listProduct);
        res.redirect('/products');
    },
    destroy: function (req, res) {
        const productId = req.params.id;
        //obtengo el indice del producto 
        const productIndexFound = listProduct.findIndex(function (product) {
            return product.id == productId;
        })       
        listProduct.splice(productIndexFound, 1);
        writeFileJson(listProduct);
        res.redirect('/products');
    }
}

module.exports = controller;
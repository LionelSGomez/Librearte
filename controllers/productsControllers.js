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
    store: (req, res) => {
        const images = req.files; //obtengo la/s imagen/es

        if(req.body.id == listProduct.length + 1){ //condicion de que el formulario no se haya enviado vacio por recargar y que sea el siguiente producto
            const newProduct = {
                ...req.body,
                id : Number(req.body.id), //cambio el id de string a numero
                precio: Number(req.body.precio), //cambio el precio de string a numero
                img1: !images[0] ? "default.png" : images[0].filename,//con if ternario valido si hay imagen, si no hay, pongo una por defecto
                img2: !images[1] ? null : images[1].filename,
                img3: !images[2] ? null : images[2].filename
            }
            for(const property in newProduct){ //itera las propiedades del objeto, si están vacias, serán null
                if(newProduct[property] == '' || !newProduct[property]){
                    newProduct[property] = null;
                }
            }

            listProduct.push(newProduct); //agrego el producto creado al array
            const newProductJson = JSON.stringify(listProduct); //convierto a json
            fs.writeFileSync('./models/products.json', newProductJson); //creo o sobreescribo newProducts.json, con el producto creado
        };
        res.redirect('/products');
        
    },

    productEdit: (req, res) => {
        const {id} = req.params;
        const product = listProduct.find((product) => product.id == id)
        res.render('./products/productEdit', {product});
    },
    
};

module.exports = controller;
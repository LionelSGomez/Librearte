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
        const newProduct = {...req.body}; //obtengo los datos del formulario en la variable newProduct
        if(newProduct.id == listProduct.length + 1){ //condicion de que el formulario no se haya enviado vacio por recargar
            newProduct.id = Number(newProduct.id); //cambio el id de string a numero
            newProduct.precio = Number(newProduct.precio); //cambio el precio de string a numero
            for(const property in newProduct){ //itera las propiedades del objeto, si están vacias, serán null
                if(newProduct[property] == ''){
                    newProduct[property] = null;
                }
            }
            listProduct.push(newProduct); //agrego el producto creado al array
            const newProductJson = JSON.stringify(listProduct); //convierto a json
            fs.writeFileSync('./models/products.json', newProductJson); //creo o sobreescribo newProducts.json, con el producto creado
            res.redirect('/products');
        }; 
        res.render('./products/productAdd', {productsList : listProduct, newProduct}); 
        
               
    },
    productEdit: (req, res) => {
        const {id} = req.params;
        const product = listProduct.find((product) => product.id == id)
        res.render('./products/productEdit', {product});
    },
    
};

module.exports = controller;
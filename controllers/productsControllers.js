const db = require('../database/models');

const controller = {
    index: (req, res) => {
        db.Product.findAll()
        .then(function (products){
            res.render('./products/products', { products })
        })
        ;
    },

    productDetail: (req, res) => {
        const { id } = req.params;
        db.Product.findByPk(id)
        .then(function (product){
            res.render('./products/productDetail', { product })
        })

    },
    productAdd: (req, res) => {
        res.render('./products/productAdd');
    },
    create: async (req, res) => {
        const image = req.file; //obtengo la/s imagen/es
        const newProduct = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            img: !image ? "default.png" : image.filename
        }
        try {
            db.Product.create(newProduct);
            res.redirect('/products')
        }
        catch (error){
            res.send({error})
        }
    },
    productEdit: (req, res) => {
        const {id} = req.params;
        db.Product.findByPk(id)
        .then(function(product){
            res.render('./products/productEdit', { product });
        })
    },
    productUpdate: async (req, res) => {
        const {id} = req.params;
        try {
            db.Product.update({
                ...req.body
            }, {
                where: {
                    id: id
                }
            });
            res.redirect('/products')        
        }
        catch (error){
            res.send({error})
        }                
    }        
    ,
     destroy: async (req, res) => {
        const {id} = req.params;
        try {
            db.Product.destroy({
                where: {
                    id: id
                }
            });
            res.redirect('/products')        
        }
        catch (error){
            res.send({error})
        }                
    }
}

module.exports = controller;
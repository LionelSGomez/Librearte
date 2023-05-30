const db = require('../database/models');

const controller = {
    products: (req,res) => {
        const pedidoCategorias = db.Product_Category.findAll()
        const pedidoProductos = db.Product.findAll({include: {association : 'product_category'}, attributes: ['id',['title', 'name'],'description']})
        Promise.all([pedidoCategorias,pedidoProductos])            
        .then(function([categorias,productos]){
            const countByCategory = {};
            const nombresCategorias = categorias.map((categoria) => {
                return categoria.name;
              });
            nombresCategorias.forEach((nombreCategoria) => {
                countByCategory[nombreCategoria] = 0;
            });
            productos.forEach((producto) => {
                const nombreCategoria = producto.product_category.name;
                countByCategory[nombreCategoria]++;
                producto.dataValues.detail = '/api/products/' + producto.id;
            });
            res.status(200).json({
                count: productos.length,
                countByCategory,
                productos

            });
        })
        .catch(function (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
          });
        
    },
    product: (req, res) => {
        db.Product.findByPk(req.params.id, { include: { association: 'product_category' } })
          .then(function (product) {
            const productCategories = [product.product_category]
            res.json({
              ...product.dataValues,
              product_category: productCategories,
              imageUrl: '/images/products/'+ product.img,
            });
          })
          .catch(function (error) {
            console.error(error);
            res.status(400).json({ error: 'Solicitud no válida.' });
          });
    },
    users: (req, res) => {
        db.User.findAll({attributes: ['id','name','email']})
        .then(function(users){
            users.forEach((user) => {
                user.dataValues.detail = '/api/users/'+user.id
            })
            res.json({
                count: users.length,
                users
            })
        })
        .catch(function (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
          });
    },
    user: (req,res) => {
        db.User.findByPk(req.params.id, {attributes: ['id','name','email','avatar']})
        .then(function(user){
            res.json({
                user,
                image : '/images/users/'+user.avatar
            })
        })
        .catch(function (error) {
            console.error(error);
            res.status(400).json({ error: 'Solicitud no válida.' });
          });
    }
}

module.exports = controller;
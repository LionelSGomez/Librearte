// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE

// ************ express() ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// ************ Route System require and use() ************
const mainRouter = require('./routers/index');
const productsRouter = require('./routers/products');

app.use('/', mainRouter);
app.use('/products', productsRouter);


// ************ Listen URL + Console log ************
app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
});

// ************ exports app - dont'touch ************
module.exports = app;
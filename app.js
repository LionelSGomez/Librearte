const express = require('express');
const path = require('path');

const mainRouter = require('./routers/index');
const productsRouter = require('./routers/products');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());


app.use('/', mainRouter);
app.use('/products', productsRouter);

app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
});
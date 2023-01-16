const express = require('express');
const path = require('path');

const mainRouter = require('./routers/index');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', mainRouter);

app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
});

// const path = require('path');
// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, '/views/index.html'));
// })

// app.get('/register', (req, res) =>{
//     res.sendFile(path.join(__dirname, '/views/register.html'));
// })

// app.get('/login', (req, res) =>{
//     res.sendFile(path.join(__dirname, '/views/login.html'));
// })
// app.get('/productcart', (req, res) =>{
//     res.sendFile(path.join(__dirname, '/views/productCart.html'));
// })
// app.get('/productDetail', (req, res)=>{
//     res.sendFile(path.join(__dirname, '/views/productDetail.html'))
// })




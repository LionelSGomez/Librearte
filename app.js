// ************ Require's ************
require('dotenv').config();
const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const expressSession = require('express-session');
const cors = require('cors');

// ************ express() ************
const app = express();

// ************ Middlewares ************
app.use(express.static('public')); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({extended : false})); //necesario para que lleguen datos en req.body
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(expressSession({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false,
}));
app.use(cors())


// ************ Template Engine ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views')); // Seteo de la ubicación de la carpeta "views"

// ************ Route System require and use() ************
const mainRouter = require('./routers/index');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');
const apiControllers = require('./routers/apis');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/api', apiControllers)


// ************ Listen URL + Console log ************
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Servidor iniciado en http://localhost:' + port);
});

// //***************ERROR***************/
// // ************ catch 404 and forward to error handler ************
// app.use((req, res, next) => next(createError(404)));

// // ************ error handler ************
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.path = req.path;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



// ************ exports app ************
module.exports = app;
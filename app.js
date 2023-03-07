// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const expressSession = require('express-session');

// ************ express() ************
const app = express();

// ************ Middlewares ************
app.use(express.static('public')); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
// app.use(logger('dev'));
// app.use(cookieParser());
app.use(expressSession({secret: 'SECRET'}));

// ************ Template Engine ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views')); // Seteo de la ubicación de la carpeta "views"

// ************ Route System require and use() ************
const mainRouter = require('./routers/index');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users')

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/register', usersRouter);


// ************ Listen URL + Console log ************
app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
});
//***************ERROS***************/
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// ************ exports app - dont'touch ************
module.exports = app;
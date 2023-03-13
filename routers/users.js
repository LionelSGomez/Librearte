const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/users');
    },
    filename: function(req, file, cb){
        cb(null, `${Math.floor(Math.random()*1000)}${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({storage});
const usersControllers = require('../controllers/usersControllers');
const storeValidator = require('../validators/storeValidator');

//Middlewares
const guestMiddlewares = require('../middlewares/guestMiddleware');

router.get('/register', guestMiddlewares, usersControllers.register);
router.post('/register', upload.single('profile'),storeValidator , usersControllers.create)
router.get('/login', guestMiddlewares, usersControllers.login);
router.post('/login', usersControllers.loginCtrl);

module.exports = router;


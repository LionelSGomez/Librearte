const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/products');
    },
    filename: function(req, file, cb){
        cb(null, `${Math.floor(Math.random()*1000)}${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({storage});
const usersController = require('../controllers/usersControllers');



router.get('/register', upload.single('profile'),mainController.register);

module.exports = router;
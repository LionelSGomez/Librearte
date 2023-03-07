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

router.get('/', usersControllers.register);
router.post('/', upload.single('profile'), usersControllers.create)
router.get('/login', usersControlers.login);
router.post('/login', usersControlers.storeLogin);

module.exports = router;


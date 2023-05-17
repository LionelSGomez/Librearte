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
const registerValidator = require('../validators/registerValidator');
const loginValidator = require('../validators/loginValidator')
const adminMiddleware = require('../middlewares/adminMiddleware')

router.get('/register',usersControllers.register);
router.post('/register', upload.single('profile'), registerValidator, usersControllers.create)

router.get('/login', usersControllers.login);
router.post('/login', loginValidator, usersControllers.loginCtrl);

router.get('/userList', adminMiddleware, usersControllers.control);
router.get('/userList/:id', adminMiddleware, usersControllers.modify);
router.put('/userList/:id', adminMiddleware, upload.single('avatar'), usersControllers.edit);
router.delete('/userList/:id', adminMiddleware, usersControllers.destroy);


module.exports = router;


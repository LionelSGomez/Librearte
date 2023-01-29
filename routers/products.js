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

const productsController = require('../controllers/productsControllers');

router.get('/', productsController.index);
router.get('/create/', productsController.productAdd);
router.post('/create/', upload.array('img'), productsController.store);
router.get('/:id', productsController.productDetail);
router.get('/:id/edit', productsController.productEdit);

module.exports = router;
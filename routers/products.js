const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/products');
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({storage});

const productsController = require('../controllers/productsControllers');

router.get('/', productsController.index);
router.get('/create/', productsController.productAdd);
router.post('/create/', upload.single('img1'), productsController.store);
router.get('/:id', productsController.productDetail);
router.get('/:id/edit', productsController.productEdit);

module.exports = router;
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

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.productAdd);
router.post('/create', upload.single('img'), productsController.create);

// /*** GET ONE PRODUCT ***/ 
router.get('/:id', productsController.productDetail);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.productEdit);
router.put('/:id/edit', productsController.productUpdate);

// /*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
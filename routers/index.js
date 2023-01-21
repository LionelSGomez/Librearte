const express = require('express');

const mainController = require('../controllers/mainControllers')

const router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/contact', mainController.contact);
router.get('/productCart', mainController.productCart);
router.get('/productDetail/:id', mainController.productDetail);
router.get('/productList', mainController.productList);
router.get('/productAdd', mainController.productAdd);
router.get('/productEdit', mainController.productEdit);

module.exports = router;


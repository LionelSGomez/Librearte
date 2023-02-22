const express = require('express');

const mainController = require('../controllers/mainControllers');

const router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/contact', mainController.contact);
router.get('/productCart', mainController.productCart);

module.exports = router;


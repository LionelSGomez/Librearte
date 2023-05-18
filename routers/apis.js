const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/apiControllers');

router.get('/products', apiControllers.products);
router.get('/products/:id', apiControllers.product);
router.get('/users', apiControllers.users)

module.exports = router;
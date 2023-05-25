const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/apiControllers');



router.get('/products', apiControllers.products);
router.get('/products/:id', apiControllers.product);
router.get('/users', apiControllers.users);
router.get('/users/:id', apiControllers.user);

module.exports = router;
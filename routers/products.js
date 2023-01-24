const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsControllers');

router.get('/', productsController.index);
router.get('/create/', productsController.productAdd);
router.post('/create/', upload.array(''), productsController.productAdd,);
router.get('/:id', productsController.productDetail);
router.get('/:id/edit', productsController.productEdit);

module.exports = router;
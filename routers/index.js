const express = require('express');
const mainController = require('../controllers/mainControllers');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const usersControllers = require('../controllers/usersControllers');
router.use(authMiddleware)


router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/contact', mainController.contact);
router.get('/productCart', mainController.productCart);
router.post('/logout', usersControllers.logout)

module.exports = router;


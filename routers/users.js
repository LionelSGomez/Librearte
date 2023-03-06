const express = require('express');
const router = express.Router();
const path = require('path');
// const multer = require('multer');

const usersControlers = require('../controllers/usersControllers');

router.get('/register', usersControlers.login);
router.post('/register', usersControlers.storeRegister);

module.exports = userRouter;




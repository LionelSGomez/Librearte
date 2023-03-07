const express = require('express');
const router = express.Router();
const path = require('path');
// const multer = require('multer');

const usersControlers = require('../controllers/usersControllers');

router.get('/login', usersControlers.login);
router.post('/login', usersControlers.storeLogin);

module.exports = userRouter;




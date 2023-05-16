const { body } = require('express-validator')

const loginValidator = [
    body('email').notEmpty().withMessage('El email es requerido').isEmail().withMessage('El formato de email no es valido').bail(),
    body('password').notEmpty().withMessage('La contraseña es requerida').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail(),
];

module.exports = loginValidator;
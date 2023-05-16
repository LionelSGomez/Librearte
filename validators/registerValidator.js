const { body } = require('express-validator')

const registerValidator = [
    body('firstName').notEmpty().withMessage('El nombre es requerido').isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres').bail(),
    body('lastName').notEmpty().withMessage('El apellido es requerido').isLength({min: 2}).withMessage('El apellido debe tener al menos 2 caracteres').bail(),
    body('email').notEmpty().withMessage('El email es requerido').isEmail().withMessage('El formato de email no es valido').bail(),
    body('password').notEmpty().withMessage('La contraseña es requerida').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail(),
    body('profile').optional().isIn([ "PNG", "JPEG", "JPG" ])
];

module.exports = registerValidator;
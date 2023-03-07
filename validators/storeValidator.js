const {body} = require('express-validator')

const storeValidations = [
    body('firstName').notEmpty().withMessage('El campo nombre es requerido').bail(),
    body('lastName').notEmpty().withMessage('El campo apellido es requerido').bail(),
    body('email').isEmail().withMessage('El formato de email no es valido').notEmpty().withMessage('El campo nombre es requerido').bail(),
    body('password').notEmpty().isLength({min: 8}).withMessage('El campo contraseña debe tener al menos 8 caracteres').bail(),
    body('profile').optional().isIn([ "PNG", "JPEG", "JPG" ])
];

module.exports = storeValidations;
const { body } = require('express-validator')

const addProductValidator = [
    body('title').notEmpty().withMessage('El nombre del producto es requerido').isLength({min: 5}).withMessage('El nombre debe tener al menos 5 caracteres').bail(),
    body('price').notEmpty().withMessage('El precio es requerido').isNumeric().withMessage('Debe ser un precio numérico').bail(),
    body('description').notEmpty().withMessage('Debe agregar una descripción del producto').isLength({min: 20}).withMessage('La descripción debe tener al menos 20 caracteres').bail(),
    body('img').isIn([ "PNG", "JPEG", "JPG" ]).withMessage('La imagen debe ser un tipo de archivo válido').bail()
];

module.exports = addProductValidator;
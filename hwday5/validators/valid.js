const { check } = require('express-validator');

const userValidationRules = [
    check('name').isLength({min:1}).withMessage('Enter the product name'),
  check('price')
    .isLength({min:1})
    .withMessage('Invalid price'),

  check('description')
    .isLength({ min: 1 })
    .withMessage('Enter the description correctly')
];

module.exports = userValidationRules;

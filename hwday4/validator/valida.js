const { check } = require('express-validator');

const userValidationRules = [
    check('name').isLength({min:1}).withMessage('Enter the correct name'),

  check('email')
    .isEmail()
    .withMessage('Invalid email'),

  check('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters')
];

module.exports = userValidationRules;

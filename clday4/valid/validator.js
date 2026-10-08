const { check } = require('express-validator');

const userValidationRules = [
  check('email')
    .isEmail()
    .withMessage('Invalid email'),
  check('pass')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters')
];

module.exports = userValidationRules;

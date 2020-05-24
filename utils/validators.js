const {
  check,
  validationResult
} = require('express-validator');

exports.validatePost = [
  check('title')
  .trim()
  .escape()
  .notEmpty()
  .isLength({
    min: 3
  }),
  check('body')
  .trim()
  .escape()
  .notEmpty()
  .isLength({
    min: 3
  }),
  check('author')
  .trim()
  .escape()
  .notEmpty()
  .isLength({
    min: 3
  }),
  (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(422).json({
        errors: errors.array()
      });
    }
    next();
  }
];
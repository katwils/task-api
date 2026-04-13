import { query } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTaskQuery = [
  query('completed')
    .optional()
    .notEmpty()
    .withMessage('completed parameter cannot be empty')
    .bail()
    .isIn(['true', 'false'])
    .withMessage('completed must be either "true" or "false"'),

  checkValidationResults,
];

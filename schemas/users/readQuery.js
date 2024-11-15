import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().pattern(/^[A-Za-z ]+$/).messages({
        'string.base': 'Name must be a string.',
        'string.empty': 'The id transaction field is required.',
        'string.pattern.base': 'Name must only contain letters (no numbers or special characters).',
    }),

    email: Joi.string().email().messages({
        'string.base': 'Email must be a string.',
        'string.empty': 'The id transaction field is required.',
        'string.email': 'Email must be a valid email address.',
    }),

    address: Joi.string().messages({
        'string.base': 'Address must be a string.',
        'string.empty': 'The id transaction field is required.'
    }),

    phone: Joi.number().integer().min(1000000000).max(9999999999).messages({
        'number.base': 'Phone number must be a number.',
        'number.empty': 'Phone number cannot be empty.',
        'number.integer': 'The cost must be an integer (without decimal points or commas).',
        'number.min': 'Phone number must be at least 10 digits long.',
        'number.max': 'Phone number cannot be longer than 10 digits.',
    }),
});


export default schema

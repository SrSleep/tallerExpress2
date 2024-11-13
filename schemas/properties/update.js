import Joi from 'joi';

const propertySchema = Joi.object({
    _id: Joi.string().hex().length(24).required().messages({
        'string.base': 'The id user must be a valid ObjectId (24 hexadecimal characters).',
        'string.hex': 'The id user must be a valid hexadecimal string.',
        'string.length': 'The id user must be exactly 24 characters long.',
        'any.required': 'The id user is required.'
    }),

    name: Joi.string().required().messages({
        'string.base': 'The name must be a string.',
        'string.empty': 'The name cannot be empty.',
        'any.required': 'The name is required.'
    }),

    category: Joi.string().required().messages({
        'string.base': 'The category must be a string.',
        'string.empty': 'The category cannot be empty.',
        'any.required': 'The category is required.'
    }),

    value: Joi.number().integer().greater(0).required().messages({
        'number.base': 'The value must be a number.',
        'number.integer': 'The cost must be an integer (without decimal points or commas).',
        'number.greater': 'The cost must be greater than 0.',
        'any.required': 'The value is required.'
    }),

    user: Joi.string().hex().length(24).required().messages({
        'string.base': 'The id user must be a valid ObjectId (24 hexadecimal characters).',
        'string.hex': 'The id user must be a valid hexadecimal string.',
        'string.length': 'The id user must be exactly 24 characters long.',
        'any.required': 'The id user is required.'
    })
});

export default propertySchema;

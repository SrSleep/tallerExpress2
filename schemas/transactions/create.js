import Joi from 'joi';

const schema = Joi.object({

    date: Joi.date().iso().required().messages({
        'date.base': 'The date must be a valid date.',
        'date.empty': 'The date is required.'
    }),

    description: Joi.string().min(5).max(255).required().messages({
        'string.base': 'The description must be a string.',
        'string.empty': 'The description is required.',
        'string.min': 'The description must be at least 5 characters long.',
        'string.max': 'The description cannot be longer than 255 characters.'
    }),

    cost: Joi.number().integer().greater(0).required().messages({
        'number.base': 'The cost must be a number.',
        'number.empty': 'The cost is required.',
        'number.greater': 'The cost must be greater than 0.',
        'number.integer': 'The cost must be an integer (without decimal points or commas).'
    }),

    asset: Joi.boolean().required().messages({
        'boolean.base': 'The asset field must be a boolean value.',
        'boolean.empty': 'The asset field is required.'
    }),

    user: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
        'string.base': 'The id user field must be a string.',
        'string.empty': 'The id user field is required.',
        'string.pattern.base': 'The id user field must be a valid 24-character hexadecimal string (ObjectId).'
    })
});

export default schema;

import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().required().pattern(/^[A-Za-z ]+$/).messages({
        'string.base': 'Name must be a string.',
        'string.pattern.base': 'Name must only contain letters (no numbers or special characters).',
        'string.empty': 'Name is required.',
        'any.required': 'The value is required.'
    }),

    email: Joi.string().email().required().messages({
        'string.base': 'Email must be a string.',
        'string.email': 'Invalid email format.',
        'string.empty': 'Email is required.',
        'any.required': 'The value is required.'
    }),

    address: Joi.string().required().messages({
        'string.base': 'Address must be a string.',
        'string.empty': 'Address is required.',
        'any.required': 'The value is required.'
    }),

    phone: Joi.number().integer().required().min(1000000000).max(9999999999).messages({
        'number.base': 'Phone must be a number.',
        'number.empty': 'Phone is required.',
        'number.integer': 'The cost must be an integer (without decimal points or commas).',
        'number.min': 'The number must be exactly 10 digits long.',
        'number.max': 'The number must be exactly 10 digits long.',
        'any.required': 'The value is required.'
    }),

    password: Joi.string().required().min(8)
        .pattern(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>-_]+$/) // Asegura que la contraseña tenga caracteres válidos
        .pattern(/[a-z]/) // Al menos una letra minúscula
        .pattern(/[A-Z]/) // Al menos una letra mayúscula
        .pattern(/[0-9]/) // Al menos un número
        .messages({
            'string.base': 'Password must be a string.',
            'string.empty': 'Password is required.',
            'string.min': 'Password must be at least 8 characters long.',
            'string.max': 'Password must be no longer than 128 characters.',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number.',
            'any.required': 'The value is required.'
        })

})

export default schema;
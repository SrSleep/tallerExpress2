import joi from 'joi-oid';

const schema = joi.object({

    email: joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'Email must be a string.',
            'string.email': 'Invalid email format.',
            'string.empty': 'Email is required.'
        }),
})

export default schema;
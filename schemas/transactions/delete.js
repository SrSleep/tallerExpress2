import Joi from 'joi';

const schema = Joi.object({
    _id: Joi.string().hex().required().messages({
        'string.base': 'The id user field must be a string.',
        'string.empty': 'The id user field is required.',
        'string.hex': 'The id user field must be a valid 24-character hexadecimal string (ObjectId).',
        'any.required': 'The value is required.'
    })
});

export default schema;
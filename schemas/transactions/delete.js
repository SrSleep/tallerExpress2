import Joi from 'joi';

const schema = Joi.object({
    _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
        'string.base': 'The id user field must be a string.',
        'string.empty': 'The id user field is required.',
        'string.pattern.base': 'The id user field must be a valid 24-character hexadecimal string (ObjectId).'
    })
});

export default schema;
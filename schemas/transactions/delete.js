import Joi from 'joi';

const schema = Joi.object({
    _id: Joi.string().hex().length(24).required().messages({
        'string.base': 'The id user field must be a string.',
        'string.empty': 'The id user field is required.',
        'string.hex': 'The id user field must be a valid  hexadecimal string (ObjectId).',
        'string.length': 'The id transaction field must be a valid 24-character hexadec.',
        'any.required': 'The value is required.'
    })
});

export default schema;
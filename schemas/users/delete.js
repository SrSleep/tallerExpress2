import Joi from 'joi';

const schema = Joi.object({

    _id: Joi.string().hex().length(24).required().messages({
        'string.base': 'The id transaction field must be a string.',
        'string.empty': 'The id transaction field is required.',
        'string.hex': 'The id transaction field must be a valid hexadecimal string (ObjectId).',
        'string.length': 'The id transaction field must be a valid 24-character hexadecimal.',
        'any.required': 'The value is required.'
    }),
})

export default schema;
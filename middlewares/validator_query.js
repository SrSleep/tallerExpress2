const validator_query = (schema) => [
    (req, res, next) => {
        const validator = schema.validate(req.query, {abortEarly: false});
        if (validator.error) {
            return res.status(400).json({
                success: false,
                message: validator.error.details.map(error => ({
                    field: error.path.join('.'),
                    message: error.message
                }))
            })
        }
        return next();
    }
]

export default validator_query
import Property from "../models/Property.js";

export default async (req, res, next) => {
    try {
        let account = await Property.findOne({_id: req.body._id})
        if (!account) {
            return res.status(400).json({
                success: false,
                message: "Property does not exist."
            })
        }
        next()

    } catch (error) {
        next(error)
    }
}
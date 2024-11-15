import User from "../models/User.js";

export default async (req,res,next) => {
    try {
        let account = await User.findOne({_id: req.body._id})
        if (!account) {
            return res.status(400).json({
                success: false,
                message: "User does not exist."
            })
        }
        next()

    } catch (error) {
        next(error)
    }
}
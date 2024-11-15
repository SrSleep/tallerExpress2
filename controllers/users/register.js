import User from "../../models/User.js";

let registerUser = async (req, res, next) => {
    try {
        let user = req.body
        user.isOnline = false;

        let all = await User.create(user)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error);
    }
}

export default registerUser;
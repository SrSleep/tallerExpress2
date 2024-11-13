import User from "../../models/User.js";

let deleteOne = async (req, res, next) => {
    try {
        const {email} = req.body;

        let deleteUser = await User.deleteOne({email})
        return res.status(200).json({
            response: deleteUser
        })
    } catch (error) {
        next(error)
    }
}

export default deleteOne;
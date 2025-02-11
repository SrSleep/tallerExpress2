import User from "../../models/User.js";

const updateUser = async (req, res, next) => {
    try {
        const {_id,email, name, address, phone, password} = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {_id},
            {
                name,
                email,
                address,
                phone,
                password
            },
            {new: true}
        );
        res.status(200).json({
            response: updatedUser
        });


    } catch (error) {
        next(error);
    }
}
export default updateUser
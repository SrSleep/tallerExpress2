import User from "../../models/User.js";

const updateUser = async (req, res, next) => {
    try {
        const {email, name, address, phone, password} = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {email},
            {
                name,
                address,
                phone,
                password
            },
            {new: true}
        );
        res.status(200).json(updatedUser);


    } catch (error) {
        next(error);
    }
}
export default updateUser
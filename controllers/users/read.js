import User from "../../models/User.js";

let allUsers = async (req, res, next) => {
    try {
        let {name, email, address, phone} = req.query
        let query = {}
        if (name) {
            query.name = {$regex: '^' + name, $options: 'i'}
        }
        if (email) {
            query.email = {$regex: '^' + email, $options: 'i'}
        }
        if (address) {
            query.address = {$regex: '^' + address, $options: 'i'}
        }
        if (phone) {
            query.phone = phone;
        }

        let all = await User.find(query);
        return res.status(200).json({
            response: all
        });

    } catch (error) {
        next(error);
    }
}

export default allUsers;
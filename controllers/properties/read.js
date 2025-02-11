import Property from "../../models/Property.js";
import "../../models/User.js"

let allProperty = async (req, res, next) => {
    try {
        let query = {};
        let {name, category, value, user} = req.query;
        if (name) {
            query.name = {$regex: '^' + name, $options: 'i'}
        }
        if (category) {
            query.category = {$regex: '^' + category, $options: 'i'}
        }
        if(value) {
            query.value = value
        }
        if (user){
            query.user = user;
        }

        let all = await Property.find(query).populate('user', 'name').exec();
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allProperty
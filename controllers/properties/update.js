import Property from "../../models/Property.js";
import "../../models/User.js"

let updateProperty = async (req, res, next) => {
    try {
        let {_id, name, category, value, user} = req.body;

        let upd = await Property.findOneAndUpdate(
            {_id},
            {
                name,
                category,
                value,
                user,
            },
            {new: true}
        );
        return res.status(200).json({
            response: upd
        });

    } catch (error) {
        next(error)
    }
}
export default updateProperty;
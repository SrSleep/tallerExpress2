import Property from "../../models/Property.js";
import "../../models/User.js"

let deleteProperty = async (req, res,next) => {
    try {
        let deleteProperty = await Property.deleteOne({
            _id: req.body._id
        })
        return res.status(200).json({
            response: deleteProperty
        })
    }catch(error) {
        next(error)
    }
};

export default deleteProperty;
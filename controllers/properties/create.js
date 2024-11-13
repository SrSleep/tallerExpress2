import Property from "../../models/Property.js";
import "../../models/User.js"

let createProperty = async (req, res,next) => {
    try {
        let property = req.body;
        let created = await Property.create(property)
        return res.status(201).json({
            response: created
        })
    }catch(error){
        next(error)
    }
}

export default createProperty;
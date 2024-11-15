import Transaction from "../models/Transaction.js";

export default async (req, res, next) => {
    try {
        let account = await Transaction.findOne({_id: req.body._id})
        if (!account) {
            return res.status(400).json({
                success: false,
                message: "Transaction does not exist."
            })
        }
        next()

    } catch (error) {
        next(error)
    }
}
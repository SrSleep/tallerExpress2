import Transaction from "../../models/Transaction.js";
import "../../models/User.js"

let createTransaction = async (req, res, next) => {
    try {
        let transaction = req.body
        let created = await Transaction.create(transaction)
        return res.status(201).json({
            response: created
        })
    } catch (error) {
        next(error)
    }
}

export default createTransaction;
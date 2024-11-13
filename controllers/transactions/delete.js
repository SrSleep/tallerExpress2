import Transaction from "../../models/Transaction.js";

let deleteOne = async (req, res, next) => {
    try {
        const {_id} = req.body;

        let deleteTransaction = await Transaction.deleteOne({_id})
        return res.status(200).json({
            response: deleteTransaction
        })
    } catch (error) {
        next(error)
    }
}

export default deleteOne;
import Transaction from "../../models/Transaction.js";
import "../../models/User.js"

let updateTransaction = async (req, res, next) => {
    try {
        const {_id, date, description, cost, asset, user} = req.body;
        let upd = await Transaction.findOneAndUpdate(
            {_id},
            {
                date,
                description,
                cost,
                asset,
                user,
            },
            {new: true}
        );
        res.status(200).json({
            response: upd
        });

    } catch (error) {
        next(error)
    }
}

export default updateTransaction
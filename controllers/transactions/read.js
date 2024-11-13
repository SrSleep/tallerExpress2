import Transaction from "../../models/Transaction.js";
import "../../models/User.js"

let allTransactions = async (req, res, next) => {
    try {
        let query = {}
        let {date, description, cost, asset, user} = req.query;
        if (date) {
            query.date = date;
        }
        if (description) {
            query.description = {$regex: '^' + description, $options: 'i'};
        }
        if (cost) {
            query.cost = cost;
        }
        if (asset) {
            query.asset = asset;
        }
        if (user) {
            query.user = user;
        }
        let all = await Transaction.find(query).populate('user','name').exec();
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}
export default allTransactions;
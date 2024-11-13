import {Schema, model} from "mongoose";

let collection = 'movements';
let schema = new Schema({
    date: {type: Date, required: true},
    description: {type: String, required: true},
    cost: {type: Number, required: true},
    asset: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'users'},

}, {
    timestamps: true
});

let Transaction = model(collection, schema);
export default Transaction;
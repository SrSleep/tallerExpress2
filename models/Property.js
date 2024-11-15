import {Schema, model} from "mongoose";

let collection = 'goods';
let schema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    value: {type: Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: "users"},
})

let Property = model(collection, schema);
export default Property;
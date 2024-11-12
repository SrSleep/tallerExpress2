import {Schema,model} from "mongoose";

const collection = 'users';
const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: Number, required: true},
    password: {type: String, required: true},
    isOnline: {type: Boolean, default: false}
}, {
    timestamps: true
});

const User = model(collection, schema);
export default User;
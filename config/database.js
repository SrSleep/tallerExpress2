import mongoose from "mongoose";

let url = process.env.URI_MONGO

async function conectionToDataBase() {
    try {
        await mongoose.connect(url);
        console.log("Connected to database...");
    } catch (error) {
        console.log(error);
    }
}

conectionToDataBase();
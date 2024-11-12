import {Router} from "express";

//import controllers
import allUsers from "../controllers/users/read.js";
import register from "../controllers/users/register.js";

//import middlewares
import validator from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";

//import schema
import schemaUserCreate from "../schemas/users/create.js"

const userRouter = Router();
userRouter.get('/all', allUsers)
userRouter.post('/register', validator(schemaUserCreate), accountExists, createHash, register)

export default userRouter;
import {Router} from "express";

//import controllers
import allUsers from "../controllers/users/read.js";
import register from "../controllers/users/register.js";
import updateUser from "../controllers/users/update.js";
import deleteOne from "../controllers/users/delete.js";

//import middlewares
import validator from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import accountNotExists from "../middlewares/accountNotExists.js";

//import schemas
import schemaUserCreate from "../schemas/users/create.js"
import schemaUpdate from "../schemas/users/update.js";
import schemaDelete from "../schemas/users/delete.js"


const userRouter = Router();
userRouter.get('/all', allUsers)
userRouter.post('/register', validator(schemaUserCreate), accountExists, createHash, register)
userRouter.put('/update', validator(schemaUpdate), accountNotExists, createHash, updateUser)
userRouter.delete('/delete',validator(schemaDelete),deleteOne)

export default userRouter;
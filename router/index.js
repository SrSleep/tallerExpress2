import {Router} from "express";
import userRouter from "./users.js";
import transactionRouter from "./transactions.js";
import propertyRouter from "./propierties.js";

const routerMain = Router();
routerMain.use('/users', userRouter)
routerMain.use('/movements', transactionRouter)
routerMain.use('/property', propertyRouter)

export default routerMain;
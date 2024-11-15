import {Router} from "express";
import userRouter from "./users.js";
import transactionRouter from "./transactions.js";
import propertyRouter from "./propierties.js";
import authRouter from "./auth.js";

const routerMain = Router();
routerMain.use('/users', userRouter)
routerMain.use('/movements', transactionRouter)
routerMain.use('/property', propertyRouter)
routerMain.use('/auth', authRouter)

export default routerMain;
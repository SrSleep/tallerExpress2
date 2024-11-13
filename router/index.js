import {Router} from "express";
import userRouter from "./users.js";
import transactionRouter from "./transactions.js";

const routerMain = Router();
routerMain.use('/users',userRouter)
routerMain.use('/movements',transactionRouter)

export default routerMain;
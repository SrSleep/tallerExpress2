import {Router} from "express";
import userRouter from "./users.js";

const routerMain = Router();
routerMain.use('/users',userRouter)

export default routerMain;
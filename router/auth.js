import {Router} from 'express';

//controllers
import signIn from "../controllers/auth/signIn.js";

//middlewares
import singInAccountExists from "../middlewares/singInAccountExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";

const authRouter = Router();

authRouter.post('/signin', singInAccountExists, isValidPassword, generateToken, signIn);

export default authRouter;
import {Router} from 'express';

//controller
import allTransactions from "../controllers/transactions/read.js";
import createTransaction from '../controllers/transactions/create.js';
import updateTransaction from '../controllers/transactions/update.js';
import deleteTransaction from '../controllers/transactions/delete.js';

//middlewares
import validator from "../middlewares/validator.js";
import userExists from "../middlewares/userExists.js";
import TransactionExist from "../middlewares/transactionExist.js";
import passport from "../middlewares/passport.js";

//schemas
import schemaTransactionCreate from "../schemas/transactions/create.js";
import schemaTransactionUpdate from "../schemas/transactions/update.js";
import schemaTransactionDelete from "../schemas/transactions/delete.js";


const transactionRouter = Router();

transactionRouter.get('/all', passport.authenticate('jwt', {session: false}), allTransactions)
transactionRouter.post('/create', passport.authenticate('jwt', {session: false}), validator(schemaTransactionCreate), userExists, createTransaction)
transactionRouter.put('/update', passport.authenticate('jwt', {session: false}), validator(schemaTransactionUpdate), userExists, updateTransaction)
transactionRouter.delete('/delete', passport.authenticate('jwt', {session: false}), validator(schemaTransactionDelete), TransactionExist, deleteTransaction)

export default transactionRouter;
import {Router} from 'express';

//controller
import allTransactions from "../controllers/transactions/read.js";
import createTransaction from '../controllers/transactions/create.js';
import updateTransaction from '../controllers/transactions/update.js';
import deleteTransaction from '../controllers/transactions/delete.js';

//middlewares
import validator from "../middlewares/validator.js";
import userExists from "../middlewares/userExists.js";

//schemas
import schemaTransactionCreate from "../schemas/transactions/create.js";
import schemaTransactionUpdate from "../schemas/transactions/update.js";
import schemaTransactionDelete from "../schemas/transactions/delete.js";


const transactionRouter = Router();

transactionRouter.get('/all', allTransactions)
transactionRouter.post('/create', validator(schemaTransactionCreate), userExists, createTransaction)
transactionRouter.put('/update', validator(schemaTransactionUpdate), userExists, updateTransaction)
transactionRouter.delete('/delete', validator(schemaTransactionDelete), deleteTransaction)

export default transactionRouter;
import {Router} from 'express';

//controllers
import allProperties from "../controllers/properties/read.js";
import createProperty from "../controllers/properties/create.js";
import updateProperty from "../controllers/properties/update.js";
import deleteProperty from "../controllers/properties/delete.js";

//middlewares
import validator from "../middlewares/validator.js";
import userExists from "../middlewares/userExists.js";
import propertyExists from "../middlewares/propertyExists.js";

//Schemas
import schemaPropertyCreate from "../schemas/properties/create.js";
import schemaPropertyUpdate from "../schemas/properties/update.js";
import schemaPropertyDelete from "../schemas/properties/delete.js";

const propertyRouter = Router();

propertyRouter.get('/all', allProperties)
propertyRouter.post('/create', validator(schemaPropertyCreate), userExists, createProperty)
propertyRouter.put('/update', validator(schemaPropertyUpdate), userExists, updateProperty)
propertyRouter.delete('/delete', validator(schemaPropertyDelete), propertyExists, deleteProperty)

export default propertyRouter;
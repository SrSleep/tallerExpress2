import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config.js'
import './config/database.js'

//import router
import router from "./router/index.js";

//import middleware
import error_handler from "./middlewares/error_handler.js";


const server = express();

const port = process.env.PORT || 8080;

const ready =()=> {
    console.log(`server ready in port: ${port}`);
};

//server
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use(cors());

//router api
server.use('/api', router);
server.use(error_handler)




server.listen(port,ready);
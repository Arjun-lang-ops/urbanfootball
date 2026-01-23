import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
//import {session} from 'express-session';
import userRoutes from './routes/userRoutes.js';
import nocache from 'nocache';
import connectDB from './config/db.js';

const app=express();

//middlewares

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(nocache());

//database connected
connectDB();


//routes
app.use('/',userRoutes);


//server creation
app.listen(3000,()=>{
    console.log('server created at 3000')
});



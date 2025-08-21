const express =require('express');
const app=express();
const db=require('./connection')
const cors=require('cors');
const router=require('./Routes/userroutes')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:'true'}));
app.use('/',router);


app.listen(3000,console.log("Server running on port 3000"));
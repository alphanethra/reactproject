const mongo=require('mongoose');

const promise=mongo.connect("mongodb+srv://likithsomanna7:oRcoZMUnVtohToK2@cluster1.wqagid3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");
promise.then(()=>{console.log("Connected to the Database")});
promise.catch((err)=>console.log(err));

const express= require('express');
const app=express();
const userrouter=require('./src/routes/users.routes');

app.use(express.urlencoded({extends:true}))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
  });
  
app.use('/users',userrouter);


module.exports=app;
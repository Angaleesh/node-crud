var express=require('express')
var Router=express.Router();
var Controller=require('../controllers/user.controller')
var dbConn=require('../../lib/db');

Router.get("/", (req, res) => {
    res.send("Hello World user");
  });

Router.get('/show',Controller.fetchAll)


module.exports=Router
'use strict';
var dbConn=require('../../lib/db');
var User=function(user){
    this.first_name=user.first_name;
    this.last_name=user.last_name;
    this.city=user.city;
}
User.findAll=(req,result)=>{
    dbConn.query("select * from node_crud",function(err,res){
        if(err){
            console.log("error :",err)
            result(null,err)
        }
        else{
            result(null,res);
        }
    })
}
module.exports=User;
"use strict";
const usrModel = require("../models/user.model");
const connection = require("./../../lib/db");
const Connection=require('./../../lib/db')
// var user=new user();
const UserControler = {
  fetchAll: async(req, res) => {
    try{
        const[rows,fields]=await connection.query('select * from node_crud')
        res.json({data:rows})
    }
    catch(error){
        console.log(error)
    }
      // console.log('controller')
    //   if (err) {
    //     res.status(500).json(err);
    //   } else {
    //     res.status(200).json(user);
    //   }
    // };
    // res.send("HIII")
  }
};

module.exports = UserControler;

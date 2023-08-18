const express=require('express')
const conn=require('./../../config/db')
const router=express.Router();

router.post('/create',(req,res,next)=>{
    let user=req.body;
    let qry='insert into users values(?,?,?)';
    conn.query(qry,[user.first_name,user.last_name,user.city],(err,result)=>{
        if(err){
            res.status(500).json(err)
        }
        else{
            res.status(200).json({message:"Data added successfully"})
        }
    })
})

router.get('/show',(req,res,next)=>{
    qry='select * from users';
    conn.query(qry,(err,result)=>{
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json(result)
        }
    })
})

router.patch('/update',(req,res,next)=>{
    const id=req.params
    const body=res.body
    qry='update users set ? where uid=?'
    conn.query(qry,[body,id],(err,result)=>{
        if(err){
            res.status(500).json(err)
        }
        else{
            res.status(200).json({message:"Data Updated Successfully"})
        }
    })
})

router.delete('/delete',(req,res,next)=>{
    const id=req.params;
    qry='delete from users where uid=?'
    conn.query(qry,[id],(err,result)=>{
        if(err){
            res.status(500).json(err)
        }
        else{
            res.status(200).json({message:"Data Deleted Successfully"})
        }
    })
})

module.exports=router;

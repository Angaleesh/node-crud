const mysql=require('mysql')

var conn=mysql.createConnection({
    host:'localhost',
    user:"root",
    password: "",
    database:'crud'
});

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})
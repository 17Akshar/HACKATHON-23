//creating express api in this files for all sites
const express = require('express')
const app = express();
const path = require('path')
const conn = require('./database')
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use(express.urlencoded())

app.get('/demo',(req,res)=>{
  res.sendFile(path.join(__dirname,'../','MAIN SITE','REGISTRATION','grocery.html'))
})
// app.get('/login',(req,res)=>{
  
// })
app.post('/registration',(req,res)=>{
  res.send(req.body)
  var result = req.body;
  console.log(result) 
  var q =  `INSERT INTO register_grocery(shopname,shopowner,emailid,phoneno,country,state,district,pincode,password,confirmpass,grocdescrip,groclogo) VALUES('${result.shopname}','${result.shopowner}','${result.emailid}',${result.phoneno},'${result.country}','${result.state}','${result.district}',${result.pincode},'${result.password}','${result.confirmpass}','${result.grocdescrip}','demo');`
  conn.query(q,(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log(result)
    }
  })
})
app.get('/user',(req,res)=>{
  q = `SELECT * FROM register_grocery`
  conn.query(q,(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send(result)
    }
  })
})
app.get('/food',(req,res)=>{
  q = `SELECT * FROM food`
  conn.query(q,(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send(result)
    }
  })
})
app.listen(3000)

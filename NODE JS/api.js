//creating express api in this files for all sites
const express = require('express')
const app = express();
const path = require('path')
// const conn = require('./database')

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../','MAIN SITE','REGISTRATION','grocery.html'))
})
// app.get('/login',(req,res)=>{
  
// })
app.post('/registration',(req,res)=>{
  res.send(req.body)
})
app.listen(3000)

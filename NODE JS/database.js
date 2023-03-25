//database connection to sql
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@17Nov2002',
  database: 'data'
})
connection.connect((err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("connected")
  }
})

module.exports = connection;//exporting connection module
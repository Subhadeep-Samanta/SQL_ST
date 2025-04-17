import connection from "./db.js";
import express from "express"
import dotenv from "dotenv"
dotenv.config()
// Example query
connection.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});

const app=express();
const PORT=process.env.PORT
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
  
})

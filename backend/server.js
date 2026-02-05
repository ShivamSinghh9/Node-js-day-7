
require("dotenv").config()
const app = require("./src/app")
const connectToDb = require("./src/config/database")

app.get("/",(req, res)=>{
    res.send("BackEnd Started")
})

connectToDb()

app.listen(3000,()=>{
    console.log("SERVER IS RUNNING AT PORT 3000");
    
})
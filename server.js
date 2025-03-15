const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes= require('./routes/route')

require("dotenv").config();

const app=express();


app.use(cors());
app.use(express.json())


app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000; 


mongoose.connect(process.env.MONGO).then(()=>console.log("Db connected"))
.catch((err)=>console.log("DB connection ERror",err));

app.listen(PORT,()=>{
    console.log("SErver Running at port:",PORT)
})
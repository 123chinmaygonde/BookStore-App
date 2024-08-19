import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
const app =  express()

const PORT = process.env.PORT|| 5000

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to db")
}).catch((error)=>{
    console.log("failed to connect")
})

app.use(express.json())
app.use(cors())

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})
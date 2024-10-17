// WHEN type:module not used
// const express = require('express')
// const dotenv = require('dotenv')

// WHEN type:module used we will use import instead of const method
import express from "express"
import dotenv from "dotenv"

import mongoose from "mongoose"
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 4000
const URI=process.env.MONGODBURI

// connect to mongoDB
try{
    mongoose.connect(URI)
    console.log("connected to mongoDB")
} catch(error){
    console.log("Error: ",error)
}

// defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
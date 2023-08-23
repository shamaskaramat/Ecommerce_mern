import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"

import cors from "cors"
const app = express()
app.use(express.json())

//db 
connectDB();
//configuration
dotenv.config()
//routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", categoryRoutes );
app.use("/api/v1/product", productRoutes);

//middleware
app.use(cors())
app.use(morgan('dev'))
app.get('/', (req,res)=>{
    res.send({
        message:"wellcome to backend"
    })
})
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`servere is running on ${PORT}`)
})
import express from 'express'
import connectDB from './connectDB.js'
import planetRoute from './routes/planetRoute.js'
const app = express()

connectDB()
app.use(express.json())

app.use("/",planetRoute);


app.listen(8000,()=>{
    console.log("Server is Running up")
})
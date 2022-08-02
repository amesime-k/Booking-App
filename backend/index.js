import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import authHotel from './routes/hotels.js'

dotenv.config()

const app = express()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
} catch (error) {
  throw error;
}
}


// Middleware
app.use(express.json())



app.use('/auth', authRoute)
app.use('/api/hotels', authHotel)




app.listen(8800, () => {
    connect()
    console.log("backend connection established!")
})
import express from 'express'
import dotenv from 'dotenv'
import databaseConfig from './config/databaseConfig.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import phoneRoutes from './routes/phoneRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import cors from "cors"



const app = express()
// .env config
dotenv.config({ path: './config/.env' })
//connect to server
databaseConfig()
//corse 
app.use(cors())
//body JSON
app.use(express.json())
//routes
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/phones', phoneRoutes)
app.use('/cart', cartRoutes)




app.use('/user', userRoutes)


















const PORT = process.env.PORT || 5000
app.listen(PORT, err => err ? console.error(err) : console.log(`server running on port: ${PORT}`))
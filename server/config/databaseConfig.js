import mongoose from 'mongoose'

const databaseConfig = async () => {
    try {
        await mongoose.connect(process.env.DB_CONFIG)
        console.log("connected to db")
    } catch (error) {
        console.error(error)
    }
}

export default databaseConfig
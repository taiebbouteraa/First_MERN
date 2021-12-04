import mongoose from 'mongoose'

const PhoneSchema = new mongoose.Schema(
    {
        phoneImage: { type: String, required: true },
        brand: { type: String, required: true },
        model: { type: String, required: true },
        mainCamera: { type: Number, required: true },
        frontCamera: { type: Number, required: true },
        RAM: { type: Number, required: true },
        storage: { type: Number, required: true },
        battery: { type: Number, required: true },
        price: { type: Number, required: true },
        trailer: { type: String },
        stock: { type: Number, required: true, default: 1 }
    },
    { timestamps: true }
)

const Phone = mongoose.model('Phone', PhoneSchema)

export default Phone
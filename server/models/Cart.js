import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, unique: true },
        phones: [
            {
                phoneId: { type: String, required: true },
                phoneImage: { type: String },
                brand: { type: String },
                name: { type: String },
                price: { type: Number },
                counter: { type: Number, default: 1 }
            }
        ]

    },
    { timestamps: true }
)

const Cart = mongoose.model('Cart', CartSchema)

export default Cart
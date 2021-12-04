import Cart from '../models/Cart.js'

//create new cart
// export const newCart = async (req, res) => {
//     const newCart = new Cart(req.body)
//     try {
//         const savedCart = await newCart.save()
//         res.status(200).json(savedCart)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

//update cart
export const updateCart = async (req, res) => {
    const id = req.params.id
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
    }
}

//remove cart
export const deleteCart = async (req, res) => {
    const id = req.params.id
    try {
        await Cart.findByIdAndDelete(id)
        res.status(200).json('Cart has been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}

//get user cart
export const getCart = async (req, res) => {
    const userId = req.params.userId
    try {
        const cart = await Cart.findOne({ userId: userId })
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get all carts
export const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
}
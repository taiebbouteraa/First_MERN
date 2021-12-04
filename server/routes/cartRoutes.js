import express from "express";
import { deleteCart, getAllCarts, getCart/*, newCart*/, updateCart } from '../controllers/cartControls.js'
import { authentified } from "../middleware/authentified.js";
import { verifyTokenAndAdmin, verifyTokenAndAuth, verifyToken } from './verifyToken.js'
const router = express.Router()


// router.post('/new', verifyTokenAndAuth, newCart) //create new cart 
router.get('/:userId', /*verifyToken, verifyTokenAndAdmin, */ authentified, getCart) //get user cart
router.get('/', verifyToken, getAllCarts) // get all carts
router.put('/:id', /*verifyTokenAndAuth,*/ updateCart) //update cart
router.delete('/:id', verifyTokenAndAuth, deleteCart) //delete cart



export default router
import express from "express";
import { updateUser, deleteUser, getUser, getAllUser } from "../controllers/userControls.js";
const router = express.Router()
import { verifyTokenAndAuth, verifyTokenAndAdmin } from './verifyToken.js'

//update user
router.put('/:id', verifyTokenAndAuth, updateUser)
//delete user
router.delete('/delete/:id', verifyTokenAndAdmin, deleteUser)
//get user
router.get('/:id', verifyTokenAndAdmin, getUser)
//get all user
router.get('/', verifyTokenAndAdmin, getAllUser)




export default router
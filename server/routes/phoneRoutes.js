import express from "express";
import { newPhone, updatePhone, deletePhone, getPhone, getAllPhones } from "../controllers/phoneControls.js";
import { verifyTokenAndAdmin } from './verifyToken.js'
const router = express.Router()


router.post('/new', /*verifyTokenAndAdmin,*/ newPhone) //create new phone 
router.put('/:id', /*verifyTokenAndAdmin,*/ updatePhone) //update phone
router.delete('/:id', /*verifyTokenAndAdmin,*/ deletePhone) // delete a phone
router.get('/:id', getPhone) //get phone by id
router.get('/', getAllPhones) // get all phones



export default router
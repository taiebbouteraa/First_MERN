import express from "express";
const router = express.Router()
import { register, login, getCurrentUser } from '../controllers/authControls.js'
import { bodyValidator, loginRules, regestrationRules } from "../middleware/userValidator.js";
import { authentified } from "../middleware/authentified.js";



router.post('/register', regestrationRules(), bodyValidator, register) //registration

router.post('/login', loginRules(), bodyValidator, login) // login

router.get('/current', authentified, getCurrentUser) //current


export default router
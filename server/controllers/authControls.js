import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Cart from '../models/Cart.js'


//registering
export const register = async (req, res) => {
    const { userName, mail, password } = req.body
    try {
        // check existant user in database
        let user = await User.findOne({ mail })
        if (user) return res.status(400).json({ error: "Existant user" })

        //encrypting password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        // add user to database
        let newUser = new User({ mail, userName, password: hash })
        await newUser.save()
        //creating a cart
        let userId = newUser._id
        let newCart = new Cart({
            userId: userId,
        })
        await newCart.save()
        // token
        const payload = {
            userId: newUser._id,
            isAdmin: newUser.isAdmin
        } //token's payload
        const token = jwt.sign(payload, process.env.SECRET_KEY)

        // status of save 
        res.status(201).json({
            newUser: {
                _id: newUser._id,
                mail: newUser.mail,
                userName: newUser.userName
            }, token
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//login
export const login = async (req, res) => {
    const { mail, password } = req.body
    try {
        // check existant user in database
        let user = await User.findOne({ mail })
        if (!user) return res.status(400).json({ error: "wrong e-mail or password" })

        //decrypting password
        const passMatch = await bcrypt.compare(password, user.password)
        if (!passMatch) return res.status(400).json({ error: "wrong e-mail or password" })

        //token
        const payload = {
            userId: user._id,
            isAdmin: user.isAdmin
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY)
        res.status(200).json({
            user: {
                _id: user._id,
                userName: user.userName,
                mail: user.mail,
                isAdmin: user.isAdmin
            }, token
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// user identification
export const getCurrentUser = (req, res) => {
    res.status(200).send(req.user)
}


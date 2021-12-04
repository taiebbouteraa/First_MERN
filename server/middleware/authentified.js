import jwt from 'jsonwebtoken'
// import Cart from '../models/Cart.js'
import User from '../models/User.js'


export const authentified = async (req, res, next) => {
    const token = req.headers.authorization
    try {
        const decodeToken = jwt.verify(token, process.env.SECRET_KEY)
        if (!decodeToken) {
            res.status(403).json('Not auth')
        } else {
            let currentUser = await User.findById(decodeToken.userId).select("-password")
            req.user = currentUser
            next()
        }
    } catch (error) {
        res.status(403).json('Not author')
    }
}
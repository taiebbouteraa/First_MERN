import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        jwt.verify(authHeader, process.env.SECRET_KEY, (err, user) => {
            err ? res.status(403).json('Invalid token') : req.user = user
            next()
        })
    } else { return res.status(401).json('Not authenticated') }
}

export const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.userId === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('Not authorised')
        }
    })
}

export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('Not admin')
        }
    })
}
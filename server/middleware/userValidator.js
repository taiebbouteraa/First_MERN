import validator from 'express-validator'
const { body, validationResult } = validator

export const regestrationRules = () => [
    body('userName', 'Please enter a user name').notEmpty(),
    body('mail', 'Please enter a valid e-mail').isEmail(),
    body('password', 'Password should be at least 6 characters').isLength({ min: 6 })
]

export const loginRules = () => [
    body('mail', 'Please enter a valid e-mail').isEmail(),
    body('password', 'Password should be at least 6 characters').isLength({ min: 6 })
]




export const bodyValidator = (req, res, next) => {
    const errors = validationResult(req)
    // console.error(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    } else {
        next()
    }
}
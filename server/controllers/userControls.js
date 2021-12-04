import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


//update user
export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            updatedUser: {
                _id: updatedUser._id,
                mail: updatedUser.mail,
                userName: updatedUser.userName
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

//remove user
export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json('User has been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}

//get user
export const getUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        res.status(200).json({
            user: {
                _id: user._id,
                mail: user.mail,
                userName: user.userName
            },
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

//get all users
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}
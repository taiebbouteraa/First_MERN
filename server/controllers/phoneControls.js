import Phone from '../models/Phone.js'

//create new phone
export const newPhone = async (req, res) => {
    const newPhone = new Phone(req.body)
    try {
        const savedPhone = await newPhone.save()
        res.status(200).json(savedPhone)
    } catch (error) {
        res.status(500).json(error)
    }
}

//update phone
export const updatePhone = async (req, res) => {
    const id = req.params.id
    try {
        const updatedProduct = await Phone.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}

//remove phone
export const deletePhone = async (req, res) => {
    const id = req.params.id
    try {
        await Phone.findByIdAndDelete(id)
        res.status(200).json(id)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get phone
export const getPhone = async (req, res) => {
    const id = req.params.id
    try {
        const phone = await Phone.findById(id)
        res.status(200).json(phone)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get all phone
export const getAllPhones = async (req, res) => {
    try {
        const phones = await Phone.find()
        res.status(200).json(phones)
    } catch (error) {
        res.status(500).json(error)
    }
}
import { commentModel } from "../../database/models/comments.model.js"
import { postModel } from "../../database/models/posts.model.js"
import { userModel } from "../../database/models/users.model.js"
import bcrypt from 'bcrypt'

export const getAllUsers = async (req, res) => {
    const allUserData = await userModel.findAll()
    res.status(200).json({ message: "SUCCESSFULLY RETRIEVED ALL USERS DATA", allUsers: allUserData })
}

export const createUser = async (req, res) => {
    const user = await userModel.findOne({ where: { email: req.body.email } })
    if (user) return res.status(400).json({ message: "EMAIL ALREADY EXISTS" })
    if (!user) {
        req.body.password = bcrypt.hashSync(req.body.password, 8)
        await userModel.create(req.body)
        res.status(201).json({ message: "SUCCESSFULLY ADDED USER" })
    }
}

export const userLogin = async (req, res) => {
    const user = await userModel.findOne({ where: { email: req.body.email } })
    if (!user) return res.status(404).json({ message: "USER NOT FOUND" })
    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
    if (!passwordIsValid) return res.status(401).json({ message: "INVALID PASSWORD" })
    const userData = { id: user.id, username: user.username }
    res.status(200).json({ message: "SUCCESSFULLY LOGGED IN", userData })
}

export const userLogout = async (req, res) => {
    res.status(200).json({ message: "TOKEN REMOVED, SUCCESSFULLY LOGGED OUT... REDIRECTING TO LOGIN PAGE" })
}

export const getUserActivity = async (req, res) => {
    const allUserData = await userModel.findAll({
        include: {
            model: postModel,
            include: {
                model: commentModel
            }
        }
    })
    res.status(200).json({ message: "SUCCESSFULLY RETRIEVED ALL USERS ACTIVITY", allUserData })
}

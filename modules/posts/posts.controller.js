import { Op } from "sequelize"
import { postModel } from "../../database/models/posts.model.js"
import { userModel } from "../../database/models/users.model.js"

export const getAllPosts = async (req, res) => {
    const allPostsData = await postModel.findAll({ where: { title: { [Op.not]: null } } })
    res.status(200).json({ message: "SUCCESSFULLY RETRIEVED ALL POSTS DATA", allPostsData })
}

export const createPosts = async (req, res) => {
    await postModel.create(req.body)
    res.status(201).json({ message: "SUCCESSFULLY ADDED POST" })
}

export const updatePosts = async (req, res) => {
    const allPostsData = await postModel.findOne({ where: { id: req.params.id } })
    if (allPostsData) {
        await postModel.update({ title: req.body.title, content: req.body.content }, { where: { id: req.params.id } })
        res.status(201).json({ message: "SUCCESSFULLY UPDATED POST" })
    }
    else {
        res.status(404).json({ message: "POST NOT FOUND" })
    }
}

export const deletePosts = async (req, res) => {
    const allPostsData = await postModel.findOne({ where: { id: req.params.id } })
    if (allPostsData) {
        await postModel.update({ title: null, content: null, userId: null }, { where: { id: req.params.id } })
        res.status(201).json({ message: "SUCCESSFULLY DELETED POST" })
    }
    else {
        res.status(404).json({ message: "POST NOT FOUND" })
    }
}

export const getAuthorPosts = async (req, res) => {
    const allPostsData = await postModel.findAll({
        include: {
            model: userModel,
            attributes:{exclude:['password','email']}
        }
    }, { where: { title: { [Op.not]: null } } })
    res.status(200).json({ message: "SUCCESSFULLY RETRIEVED ALL POSTS DATA", allPostsData })
}


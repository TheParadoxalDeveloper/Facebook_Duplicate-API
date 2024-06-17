import { commentModel } from "../../database/models/comments.model.js"

export const getAllComments = async (req, res) => {
    const allCommentsData = await commentModel.findAll()
    res.status(200).json({ message: "SUCCESSFULLY RETRIEVED ALL COMMENTS DATA", allCommentsData })
}

export const createComments = async (req, res) => {
    await commentModel.create(req.body)
    res.status(201).json({ message: "SUCCESSFULLY ADDED COMMENT" })
}


export const updateComments = async (req, res) => {
    const allCommentsData = await commentModel.findOne({ where: { id: req.params.id } })
    if (allCommentsData) {
        await commentModel.update(req.body, { where: { id: req.params.id } })
        res.status(201).json({ message: "SUCCESSFULLY UPDATED COMMENT" })
    }
    else {
        res.status(404).json({ message: "COMMENT NOT FOUND" })
    }
}

export const deleteComments = async (req, res) => {
    const allCommentsData = await commentModel.findOne({ where: { id: req.params.id } })
    if (allCommentsData) {
        await commentModel.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: "SUCCESSFULLY DELETED COMMENT" })
    }
    else {
        res.status(404).json({ message: "COMMENT NOT FOUND" })
    }
}

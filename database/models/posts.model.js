import { Sequelize } from "sequelize"
import { sequeli } from "../dbConnection.js"
import { commentModel } from "./comments.model.js"
import { userModel } from "./users.model.js"

export const postModel = sequeli.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content:{
        type: Sequelize.STRING
    }
},{timestamps: false})

postModel.hasMany(commentModel)

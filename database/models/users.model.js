import { Sequelize } from "sequelize"
import { sequeli } from "../dbConnection.js"
import { postModel } from "./posts.model.js"
import { commentModel } from "./comments.model.js"


export const userModel = sequeli.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{timestamps: false})

userModel.hasMany(postModel)
postModel.belongsTo(userModel)
userModel.hasMany(commentModel)
import { Sequelize } from "sequelize"
import { sequeli } from "../dbConnection.js"


export const commentModel = sequeli.define('comment', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{timestamps: false})
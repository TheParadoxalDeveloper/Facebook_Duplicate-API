import express from 'express'
import { Sequelize } from 'sequelize'
import { sequeli } from './database/dbConnection.js'
import { userModel } from './database/models/users.model.js'
import userRouter from './modules/users/users.routes.js'
import postRouter from './modules/posts/posts.routes.js'
import commentRouter from './modules/comments/comments.routes.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3350
app.listen(port, () => console.log(`HELLO! SERVER IS RUNNING ON PORT NUMBER ${port}`))
app.use(express.json())
app.use(cors())
sequeli.sync({ alter: true })

app.use('/auth', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)





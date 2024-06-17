import { Router } from "express";
import { createUser, getAllUsers, getUserActivity, userLogin, userLogout } from "./users.controller.js";

const userRouter = Router()

userRouter.get('/users', getAllUsers)
userRouter.post('/signup', createUser)
userRouter.post('/signin', userLogin)
userRouter.delete('/logout', userLogout)
userRouter.get('/user/activity', getUserActivity)



export default userRouter
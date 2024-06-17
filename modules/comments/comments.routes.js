import { Router } from "express";
import { createComments, deleteComments, getAllComments, updateComments } from "./comments.controller.js";


const commentRouter = Router()

commentRouter.get('/', getAllComments)
commentRouter.post('/', createComments)
commentRouter.put('/:id', updateComments)
commentRouter.delete('/:id', deleteComments)


export default commentRouter
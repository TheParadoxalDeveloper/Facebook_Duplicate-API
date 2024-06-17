import { Router } from "express";
import { createPosts, deletePosts, getAllPosts, getAuthorPosts, updatePosts } from "./posts.controller.js";

const postRouter = Router()

postRouter.get('/',getAllPosts)
postRouter.post('/',createPosts)
postRouter.put('/:id',updatePosts)
postRouter.delete('/:id',deletePosts)
postRouter.get('/authors',getAuthorPosts)


export default postRouter
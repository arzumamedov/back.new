import { Router } from "express";
import { createBlogs, deleteBlogs, getAllBlogs, getByIdBlogs, updateBlogs } from "../controller/BlogController.js";
import { myLogger } from "../middleware/LoggerMiddleWare.js";
export const blogRouter = Router();



blogRouter.get('/',myLogger, getAllBlogs)
blogRouter.get('/:id',myLogger, getByIdBlogs)
blogRouter.post('/',myLogger, createBlogs)
blogRouter.put('/:id',myLogger, updateBlogs)
blogRouter.delete('/:id',myLogger, deleteBlogs)
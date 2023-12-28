import { userModel } from "../model/BlogModel.js"

export const getAllBlogs = async (req, res) => {
    const users = await userModel.find({})
    res.send(users)
  }
  export const getByIdBlogs = async(req, res) => {
    const { id } = req.params
    const users = await userModel.findById(id)
    res.send(users)
  }

  export const createBlogs = async (req, res) => {
    const {name,surname,age} = req.body
    const newUsers = new userModel({name,surname,age})
    await newUsers.save()
    res.send('Post yaradildi')
  }

  export const updateBlogs = async(req, res) => {
    const { id } = req.params
    const {name,surname,age} = req.body
    const users = await userModel.findByIdAndUpdate(id,{name,surname,age})
      res.send(users)
    }

    export const deleteBlogs = async(req, res) => {
        const { id } = req.params
        const users = await userModel.findByIdAndDelete(id)
        res.send(users)
      }
import express from 'express';
import mongoose, { Schema } from 'mongoose';
import { blogRouter } from './src/router/BlogRouter.js';

const app = express()
const port = 3000
app.use(express.json())

app.use('/',blogRouter)

// const userSchema = new Schema({
//   name: String, 
//   surname: String,
//   age: Number
// });
// const userModel = mongoose.model('users',userSchema )

// app.get('/', async (req, res) => {
//   const users = await userModel.find({})
//   res.send(users)
// })


// app.get('/:id', async(req, res) => {
//   const { id } = req.params
//   const users = await userModel.findById(id)
//   res.send(users)
// })
// app.post('/', async (req, res) => {
//   const {name,surname,age} = req.body
//   const newUsers = new userModel({name,surname,age})
//   await newUsers.save()
//   res.send('Post yaradildi')
// })

// app.put('/:id', async(req, res) => {
// const { id } = req.params
// const {name,surname,age} = req.body
// const users = await userModel.findByIdAndUpdate(id,{name,surname,age})
//   res.send(users)
// })

// app.delete('/:id', async(req, res) => {
//   const { id } = req.params
//   const users = await userModel.findByIdAndDelete(id)
//   res.send(users)
// })



mongoose.connect('mongodb+srv://arzu:arzu@cluster0.9p2kmwb.mongodb.net/')
  .then(() => console.log('Connected!'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
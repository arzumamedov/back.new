import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String, 
    surname: String,
    age: Number
  });
 export  const userModel = mongoose.model('users',userSchema )
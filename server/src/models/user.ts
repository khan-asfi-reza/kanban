import mongoose from "mongoose";
import {BaseDoc, schemaOptions} from "./modelOptions";

export interface User {
  username: string,
  password: string
}

export interface UserDocument extends User, mongoose.Document, BaseDoc{}


const Schema = mongoose.Schema
const userSchema = new Schema<UserDocument>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}, schemaOptions)


export default mongoose.model<UserDocument>('User', userSchema);
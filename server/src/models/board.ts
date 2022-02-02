import mongoose from "mongoose";
import {BaseDoc, schemaOptions} from "./modelOptions";

export interface Board{
  user: mongoose.Schema.Types.ObjectId,
  icon: string,
  title: string,
  description: string,
  position: number,
  favourite: boolean,
  favouritePosition: number
}

export interface BoardDocument extends Board, mongoose.Document, BaseDoc{}

const Schema = mongoose.Schema
const boardSchema = new Schema<BoardDocument>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  icon: {
    type: String,
    default: '📃'
  },
  title: {
    type: String,
    default: 'Untitled'
  },
  description: {
    type: String,
    default: `Add your Description`
  },
  position: {
    type: Number
  },
  favourite: {
    type: Boolean,
    default: false
  },
  favouritePosition: {
    type: Number,
    default: 0
  }
}, schemaOptions)


export default mongoose.model<BoardDocument>('Board', boardSchema);
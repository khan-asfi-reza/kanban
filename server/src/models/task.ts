import mongoose from "mongoose";
import {BaseDoc, schemaOptions} from "./modelOptions";

const Schema = mongoose.Schema

export interface Task{
  section: mongoose.Schema.Types.ObjectId,
  title: string,
  content: string,
  position: number
}


export interface TaskDocument extends Task, mongoose.Document, BaseDoc{}

const taskSchema = new Schema<TaskDocument>({
  section: {
    type: Schema.Types.ObjectId,
    ref: 'Section',
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  position: {
    type: Number
  }
}, schemaOptions)

export default mongoose.model<TaskDocument>('Task', taskSchema);
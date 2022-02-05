import mongoose from "mongoose";
import {BaseDoc, schemaOptions} from "./modelOptions";

const Schema = mongoose.Schema

export interface Section{
  board: mongoose.Schema.Types.ObjectId,
  title: string,
}

export interface SectionDocument extends Section, mongoose.Document, BaseDoc{}


const sectionSchema = new Schema<SectionDocument>({
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  },
  title: {
    type: String,
    default: ''
  }
}, schemaOptions)


export default mongoose.model<SectionDocument>('Section', sectionSchema);
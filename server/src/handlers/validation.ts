import {validationResult} from "express-validator";
import mongoose from "mongoose";


export const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

export const isObjectId = (value: string) => mongoose.Types.ObjectId.isValid(value)
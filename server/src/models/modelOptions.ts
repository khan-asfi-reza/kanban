export const schemaOptions = {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  },
  timestamp: true
}
export interface BaseDoc{
  createdAt: Date;
  updatedAt: Date;
  _doc?: any
}
import { Schema } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: ObjectId, required: true, ref: 'Profile' }
  },
  { timestamps: true, toJSON: { virtuals: true } },
)
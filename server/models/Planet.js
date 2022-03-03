import { Schema } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  creatorId: { type: ObjectId, required: true, ref: 'Profile' },
  starId: { type: ObjectId, required: true, ref: 'Star' }
},
  { timestamps: true, toJSON: { virtuals: true } },
)
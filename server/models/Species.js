import { Schema } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

export const SpeciesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  creatorId: { type: ObjectId, required: true, ref: 'Profile' },
  galaxyId: { type: ObjectId, required: true, ref: 'Galaxy' },
  starId: { type: ObjectId, required: true, ref: 'Star' },
  planetId: { type: ObjectId, required: true, ref: 'Planet' },
  moonId: { type: ObjectId, required: true, ref: 'Moon' }
},
  { timestamps: true, toJSON: { virtuals: true } })
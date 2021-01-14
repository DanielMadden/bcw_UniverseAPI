import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const PlanetSchema = new Schema(
  {
    name: { type: String, required: true },
    Star: { type: ObjectId, ref: "Star", required: true }
  },
  {
    toJSON: { virtuals: true }
  }
)

export default PlanetSchema
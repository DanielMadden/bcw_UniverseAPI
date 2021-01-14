import mongoose from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId

const MoonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    Planet: { type: ObjectId, ref: "Planet", required: true }
  },
  {
    toJSON: { virtuals: true }
  }
)

export default MoonSchema
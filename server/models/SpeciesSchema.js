import mongoose from "mongoose"

const SpeciesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }
  },
  {
    toJSON: { virtuals: true }
  }
)

export default SpeciesSchema
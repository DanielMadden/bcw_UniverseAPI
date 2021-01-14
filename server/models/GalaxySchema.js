import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GalaxySchema = new Schema(
  {
    name: { type: String, required: true }
  },
  {
    toJSON: { virtuals: true }
  }
)

export default GalaxySchema
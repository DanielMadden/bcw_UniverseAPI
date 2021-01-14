import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const StarSchema = new Schema(
  {
    name: { type: String, required: true },
    Galaxy: { type: ObjectId, ref: "Galaxy", required: true }
  },
  {
    toJSON: { virtuals: true }
  }
)

export default StarSchema
import mongoose from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId

const PlanetSpeciesSchema = new mongoose.Schema(
  {
    Species: { type: ObjectId, ref: "Species", required: true },
    Planet: { type: ObjectId, ref: "Planet", required: true }
  },
  {
    toJSON: { virtuals: true }
  }
)

export default PlanetSpeciesSchema
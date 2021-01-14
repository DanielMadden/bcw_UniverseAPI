import { dbContext } from "../db/DbContext"

class MoonService {
  async get(query = {}) {
    return await dbContext.Moons.find(query).populate("Planet")
  }
  async post(body) {
    return await dbContext.Moons.create(body)
  }
  async put(id, body) {
    return {
      Original: await dbContext.Moons.findById(id),
      Updated: await dbContext.Moons.findByIdAndUpdate(id, body, { new: true })
    }
  }
  async delete(id) {
    return {
      Deleted: await dbContext.Moons.findByIdAndDelete(id)
    }
  }
}

export const moonService = new MoonService()
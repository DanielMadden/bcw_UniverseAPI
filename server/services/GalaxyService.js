import { dbContext } from "../db/DbContext"

class GalaxyService {

  async get(query = {}) {
    return await dbContext.Galaxies.find(query)
  }

  async post(body) {
    return await dbContext.Galaxies.create(body)
  }

  async put(id, body) {
    let original = await dbContext.Galaxies.findById(id)
    // if (!original) return `No user by id "${id}"`
    let updated = await dbContext.Galaxies.findByIdAndUpdate(id, body, { new: true })
    return ({
      Original: original,
      Updated: updated
    })
  }

  async delete(id) {
    let deleted = await dbContext.Galaxies.findByIdAndDelete(id)
    // if (!deleted) return `No galaxy by id "${id}"`
    return ({ Deleted: deleted })
  }

}

export const galaxyService = new GalaxyService()
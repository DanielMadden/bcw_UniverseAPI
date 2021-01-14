import { dbContext } from "../db/DbContext"

class StarService {

  async get(query = {}) {
    return await dbContext.Stars.find(query).populate("Galaxy")
  }

  async post(body) {
    return await dbContext.Stars.create(body)
  }

  async put(id, body) {
    return {
      Original: await dbContext.Stars.findById(id),
      Updated: await dbContext.Stars.findByIdAndUpdate(id, body, { new: true })
    }
  }

  async delete(id) {
    return {
      Deleted: await dbContext.Stars.findByIdAndDelete(id)
    }
  }

}

export const starService = new StarService()
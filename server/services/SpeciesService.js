import { dbContext } from "../db/DbContext"
import { planetSpeciesService } from "./PlanetSpeciesService"

class SpeciesService {
  async get(query) {
    return await dbContext.Species.find(query)
  }
  async getPlanets(id) {
    return await planetSpeciesService.getPlanetsBySpecies(id)
  }
  async post(body) {
    return await dbContext.Species.create(body)
  }
  async put(id, body) {
    return {
      Original: await dbContext.Species.findById(id),
      Updated: await dbContext.Species.findByIdAndUpdate(id, body, { new: true })
    }
  }
  async delete(id) {
    return {
      Deleted: await dbContext.Species.findByIdAndDelete(id)
    }
  }
}

export const speciesService = new SpeciesService()
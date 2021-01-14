import { dbContext } from "../db/DbContext"
import { planetSpeciesService } from "./PlanetSpeciesService"

class PlanetService {
  async get(query = {}) {
    return await dbContext.Planets.find(query).populate("Star")
  }
  async getSpecies(id) {
    return await planetSpeciesService.getSpeciesByPlanet(id)
  }
  async post(body) {
    return await dbContext.Planets.create(body)
  }
  async put(id, body) {
    return ({
      Original: await dbContext.Planets.findById(id),
      Updated: await dbContext.Planets.findByIdAndUpdate(id, body, { new: true })
    })
  }
  async delete(id) {
    return {
      Deleted: await dbContext.Planets.findByIdAndDelete(id)
    }
  }
}

export const planetService = new PlanetService()
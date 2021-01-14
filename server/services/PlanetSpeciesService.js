import { dbContext } from "../db/DbContext"

class PlanetSpeciesService {
  get = async (query = {}) => {
    let res = await dbContext.PlanetSpecies.find(query)
      .populate("Species")
      .populate("Planet")
    return res.map(obj => {
      return {
        id: obj.id,
        species: obj.Species.name,
        slanet: obj.Planet.name
      }
    })
  }
  post = async body => await dbContext.PlanetSpecies.create(body)
  put = async (id, body) => {
    return {
      Original: await dbContext.PlanetSpecies.findById(id),
      Updated: await dbContext.PlanetSpecies.findByIdAndUpdate(id, body, { new: true })
    }
  }

  async delete(id) {
    return {
      Deleted: await dbContext.PlanetSpecies.findByIdAndDelete(id)
    }
  }

  async getSpeciesByPlanet(id) {
    let res = await dbContext.PlanetSpecies.find({ Planet: id })
      .populate("Species");
    // return res
    return {
      planet: (await dbContext.Planets.findById(id)).name,
      species: res.map(obj => {
        return obj.Species.name
      })
    }
  }

  async getPlanetsBySpecies(id) {
    let res = await dbContext.PlanetSpecies.find({ Species: id })
      .populate("Planet");
    return {
      species: (await dbContext.Species.findById(id)).name,
      planets: res.map(obj => {
        return obj.Planet.name
      })
    }
  }
}

export const planetSpeciesService = new PlanetSpeciesService()
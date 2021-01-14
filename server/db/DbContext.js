import mongoose from "mongoose";
import GalaxySchema from "../models/GalaxySchema";
import MoonSchema from "../models/MoonSchema";
import PlanetSchema from "../models/PlanetSchema";
import PlanetSpeciesSchema from "../models/PlanetSpeciesSchema";
import SpeciesSchema from "../models/SpeciesSchema";
import StarSchema from "../models/StarSchema";

class DbContext {
  Galaxies = mongoose.model("Galaxy", GalaxySchema)
  Stars = mongoose.model("Star", StarSchema)
  Planets = mongoose.model("Planet", PlanetSchema)
  Moons = mongoose.model("Moon", MoonSchema)
  Species = mongoose.model("Species", SpeciesSchema)
  PlanetSpecies = mongoose.model("PlanetSpecies", PlanetSpeciesSchema)
}

export const dbContext = new DbContext();

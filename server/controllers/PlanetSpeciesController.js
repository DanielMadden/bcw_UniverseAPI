import { planetSpeciesService } from "../services/PlanetSpeciesService";
import BaseController from "../utils/BaseController";

export class PlanetSpeciesController extends BaseController {
  constructor() {
    super("api/planetspecies")
    this.router
      .get("", this.get)
      .post("", this.post)
      .put("/:id", this.put)
      .delete("/:id", this.delete)
  }
  async get(req, res, next) {
    try {
      res.send(await planetSpeciesService.get(req.query))
    } catch (error) {
      next(error)
    }
  }
  async post(req, res, next) {
    try {
      res.send(await planetSpeciesService.post(req.body))
    } catch (error) {
      next(error)
    }
  }
  async put(req, res, next) {
    try {
      res.send(await planetSpeciesService.put(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await planetSpeciesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

}
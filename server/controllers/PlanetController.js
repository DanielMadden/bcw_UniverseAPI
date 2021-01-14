import { planetService } from "../services/PlanetService";
import BaseController from "../utils/BaseController";

export class PlanetController extends BaseController {
  constructor() {
    super("api/planets")
    this.router
      .get("", this.get)
      .get("/:id/species", this.getSpecies)
      .post("", this.post)
      .put("/:id", this.put)
      .delete("/:id", this.delete)
  }
  async get(req, res, next) {
    try {
      res.send(await planetService.get(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getSpecies(req, res, next) {
    try {
      res.send(await planetService.getSpecies(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async post(req, res, next) {
    try {
      res.send(await planetService.post(req.body))
    } catch (error) {
      next(error)
    }
  }
  async put(req, res, next) {
    try {
      res.send(await planetService.put(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await planetService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
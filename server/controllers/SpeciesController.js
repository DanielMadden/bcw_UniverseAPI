import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";

export class SpeciesController extends BaseController {
  constructor() {
    super("api/species")
    this.router
      .get("", this.get)
      .get("/:id/planets", this.getPlanets)
      .post("", this.post)
      .put("/:id", this.put)
      .delete("/:id", this.delete)
  }
  async get(req, res, next) {
    try {
      res.send(await speciesService.get(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getPlanets(req, res, next) {
    try {
      res.send(await speciesService.getPlanets(req.params.id))
    } catch (error) {
      next(error)
    }
  }
  async post(req, res, next) {
    try {
      res.send(await speciesService.post(req.body))
    } catch (error) {
      next(error)
    }
  }
  async put(req, res, next) {
    try {
      res.send(await speciesService.put(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await speciesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
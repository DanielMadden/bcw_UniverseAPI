import { galaxyService } from "../services/GalaxyService";
import BaseController from "../utils/BaseController";

export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxies")
    this.router
      .get("", this.get)
      .post("", this.post)
      .put("/:id", this.put)
      .delete("/:id", this.delete)
  }
  async get(req, res, next) {
    try {
      res.send(await galaxyService.get(req.query))
    } catch (error) {
      next(error)
    }
  }
  async post(req, res, next) {
    try {
      res.send(await galaxyService.post(req.body))
    } catch (error) {
      next(error)
    }
  }
  async put(req, res, next) {
    try {
      res.send(await galaxyService.put(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await galaxyService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
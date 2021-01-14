import { moonService } from "../services/MoonService";
import BaseController from "../utils/BaseController";

export class MoonController extends BaseController {
  constructor() {
    super("api/moons")
    this.router
      .get("", this.get)
      .post("", this.post)
      .put("/:id", this.put)
      .delete("/:id", this.delete)
  }

  async get(req, res, next) {
    try {
      res.send(await moonService.get(req.query))
    } catch (error) {
      next(error)
    }
  }
  async post(req, res, next) {
    try {
      res.send(await moonService.post(req.body))
    } catch (error) {
      next(error)
    }
  }

  async put(req, res, next) {
    try {
      res.send(await moonService.put(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await moonService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";

export class StarController extends BaseController {
  constructor() {
    super("api/stars")
    this.router
      .get("", this.get)
      .post("", this.post)
      .put("/:id", this.put)
      .delete("/:id", this.delete)
  }
  async get(req, res, next) {
    try {
      res.send(await starService.get(req.query))
    } catch (error) {
      next(error)
    }
  }

  async post(req, res, next) {
    try {
      res.send(await starService.post(req.body))
    } catch (error) {
      next(error)
    }
  }

  async put(req, res, next) {
    try {
      res.send(await starService.put(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await starService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

}
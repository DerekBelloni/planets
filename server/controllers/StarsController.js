import { Auth0Provider } from "@bcwdev/auth0provider";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController {

  constructor() {
    super('api/stars');
    this.router
      .get('', this.getAllStars)
      .get('/:id', this.getOneStar)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.discoverStars)
  }

  async getOneStar(req, res, next) {
    try {
      const star = await starsService.getOneStar(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
  async getAllStars(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }

  async discoverStars(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const star = await starsService.discoverStars(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
}

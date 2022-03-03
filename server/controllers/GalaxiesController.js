import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {

  constructor() {
    super('api/galaxies');
    this.router
      .get('', this.getGalaxy)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.discoverGalaxy)
  }

  async getGalaxy(req, res, next) {
    try {
      const galaxy = await galaxiesService.getGalaxy(req.query)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async discoverGalaxy(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const galaxy = await galaxiesService.discoverGalaxy(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}

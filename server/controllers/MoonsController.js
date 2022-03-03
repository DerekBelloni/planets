import { Auth0Provider } from "@bcwdev/auth0provider";
import { moonsService } from "../services/MoonsSErvice";
import BaseController from "../utils/BaseController";

export class MoonsController extends BaseController {

  constructor() {
    super('api/moons');
    this.router
      .get('', this.getAllMoons)
      .get('', this.getOneMoon)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.discoverMoons)
  }

  async getOneMoon(req, res, next) {
    try {
      const moon = await moonsService.getOneMoon()
      return res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async getAllMoons(req, res, next) {
    try {
      const moons = await moonsService.getAllMoons(req.query)
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async discoverMoons(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const moon = await moonsService.discoverMoons(req.body)
      return res.send(moon)
    } catch (error) {
      next(error)
    }

  }
}

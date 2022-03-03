import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class PlanetsController extends BaseController {

  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAllPlanets)
      .get('', this.getOnePlanet)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.discoverPlanets)
  }


  async getOnePlanet(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getAllPlanets(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }

  async discoverPlanets(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.userId
    } catch (error) {
      next(error)
    }
  }
}


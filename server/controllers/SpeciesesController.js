import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class SpeciesesController extends BaseController {

  constructor() {
    super('api/species');
    this.router
      .get('', this.getAllSpecies)
      .get('', this.getOneSpecies)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.discoverSpecies)
  }

  async getOneSpecies(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getAllSpecies(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }

  async discoverSpecies(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}

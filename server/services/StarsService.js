import { dbContext } from "../db/DbContext";

export class StarsService {

  async getOneStar(id) {
    const star = await dbContext.Stars.findById(id).populate('galaxy')
    return star
  }

  async discoverStars(body) {
    const star = await dbContext.Stars.create(body)
    return star
  }
}

export const starsService = new StarsService();

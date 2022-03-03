import { dbContext } from "../db/DbContext";
import { StarsService } from "./StarsService";

class MoonsService {

  async getOneMoon() {

  }
  async getAllMoons(query = {}) {
    const moons = await dbContext.Moons.find(query)
    return moons
  }

  async discoverMoons(body) {
    const moon = await dbContext.Moons.create(body)
    return moon
  }

}

export const moonsService = new MoonsService();


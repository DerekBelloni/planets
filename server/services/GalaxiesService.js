import { dbContext } from "../db/DbContext";

class GalaxiesService {
  async getGalaxy(query = {}) {
    const galaxy = await dbContext.Galaxies.find(query)
    return galaxy
  }
  async discoverGalaxy(body) {
    const galaxy = await dbContext.Galaxies.create(body)
    return galaxy
  }
}

export const galaxiesService = new GalaxiesService();

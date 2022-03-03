import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GalaxySchema } from "../models/Galaxy";
import { MoonSchema } from "../models/Moon";
import { PlanetSchema } from "../models/Planet";
import { SpeciesSchema } from "../models/Species";
import { StarSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');

  Planets = mongoose.model('Planet', PlanetSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema);

  Stars = mongoose.model('Star', StarSchema);

  Specieses = mongoose.model('Species', SpeciesSchema)

  Moons = mongoose.model('Moon', MoonSchema)
}

export const dbContext = new DbContext()

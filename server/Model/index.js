import sequelize, { init as initDatabase } from "../db.js";
import User, { seedUsers } from "./User.js";
import FavoriteLocation from "./FavoriteLocation.js";

export { sequelize, initDatabase, User, FavoriteLocation, seedUsers };
export default { sequelize, initDatabase, User, FavoriteLocation, seedUsers };

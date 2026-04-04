import sequelize, { init as initDatabase } from "../db.js";
import User, { seedUsers } from "./User.js";

export { sequelize, initDatabase, User, seedUsers };
export default { sequelize, initDatabase, User, seedUsers };
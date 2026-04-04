import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: false,
    define: {
        timestamps: true
    }
})


export const init = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to the database successfully.");

        await sequelize.sync({ force: false });
        console.log("Database synchronized successfully.");

        return true;
    }

    catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}

export default sequelize;
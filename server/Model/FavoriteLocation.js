import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const FavoriteLocation = sequelize.define("favorite_location", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lat: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    lon: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: true
});

export default FavoriteLocation;


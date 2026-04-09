import { FavoriteLocation } from "./../Model/index.js";


export const getFavorites = async (req, res) => {
    try {
        const favorites = await FavoriteLocation.findAll({
            where: { userId: req.userId },
            exc: ["id", "lat", "lon", "createdAt", "updatedAt"]
        });

        res.json(favorites);
    }
    catch (error) {
        console.error("Error fetching favorites:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const addFavorite = async (req, res) => {
    try {
        const { lat, lon } = req.body;

        if (lat === undefined || lon === undefined) {
            return res.status(400).json({ message: "Latitude and longitude are required" });
        }

        const existing = await FavoriteLocation.findOne({
            where: { userId: req.userId, lat, lon }
        });

        if (existing) {
            return res.status(200).json(existing);
        }

        const favorite = await FavoriteLocation.create({
            userId: req.userId,
            lat,
            lon
        });

        res.status(201).json(favorite);
    }
    catch (error) {
        console.error("Error adding favorite:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const removeFavorite = async (req, res) => {
    try {
        const { id } = req.params;

        const favorite = await FavoriteLocation.findOne({
            where: { id, userId: req.userId }
        });

        if (!favorite) {
            return res.status(404).json({ message: "Favorite not found" });
        }

        await favorite.destroy();
        return res.status(204).send();
    }
    catch (error) {
        console.error("Error removing favorite:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


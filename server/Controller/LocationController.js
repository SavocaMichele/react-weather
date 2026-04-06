

export const getCoordsByName = async (req, res) => {
    const { location } = req.query;

    if (!location) {
        return res.status(400).json({ error: "Location is required" });
    }

    const data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${process.env.WEATHER_KEY}&limit=5`);
    if (!data.ok) {
        console.error("Failed to location data");
        res.status(500).json({ error: "Failed to location data" });
    }

    const response  = await data.json();
    res.json(response);
}
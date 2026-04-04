

export const getWeather = async (req, res) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ error: "Latitude and longitude are required" });
        }

        const data = await fetch(`${process.env.WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}&units=metric`);
        if (!data.ok) {
            console.error("Failed to fetch weather data");
            res.status(500).json({ error: "Failed to fetch weather data" });
        }


        // Get location
        const location = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`)
        if (!location.ok) {
            console.error("Failed to fetch location data");
            res.status(500).json({ error: "Failed to fetch location data" });
        }


        const weatherData   = await data.json();
        const locationData  = await location.json();

        weatherData.location = locationData?.[0] || [];
        res.json(weatherData);
    }

    catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
}
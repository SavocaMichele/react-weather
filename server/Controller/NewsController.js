

export const getNews = async (req, res) => {
    const { search } = req.query;

    if (!search) {
        return res.status(400).json({ error: "Search query is required" });
    }

    const data = await fetch(`${process.env.NEWS_URL}/top?api_token=${process.env.NEWS_KEY}&sort=published_at&limit=5&search=${search}`);
    if (!data.ok) {
        console.error("Failed to fetch news data");
        return res.status(500).json({ error: "Failed to fetch news data" });
    }

    const newsData = await data.json();
    res.json(newsData);
}
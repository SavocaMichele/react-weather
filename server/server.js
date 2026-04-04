import express from "express";
import cors from "cors";
import authMiddleware from "./Middleware/auth.js";
import {initDatabase, seedUsers} from "./Model/index.js";
import dotenv from "dotenv";
import {login, register, user} from "./Controller/UserController.js";
import {getWeather} from "./Controller/WeatherController.js";
import {getNews} from "./Controller/NewsController.js";

dotenv.config();
const app  = express();
const PORT  = 3000;


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/api/auth/register", register);
app.post("/api/auth/login", login);
app.post("/api/auth/user", authMiddleware, user)

app.get("/api/weather", getWeather);
app.get("/api/news", getNews);


// Start Server
async function startServer() {
    try {
        await initDatabase();
        await seedUsers();

        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
}

startServer();
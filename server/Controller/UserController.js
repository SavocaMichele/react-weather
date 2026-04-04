import {User} from "./../Model/index.js";
import jwt from "jsonwebtoken";


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Check password
        const isValidPassword = await user.validatePassword(password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate token
        const token = user.generateAuthToken();
        res.json({ token });
    }

    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({message: "Internal server error"});
    }
}


export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Create user
        const user = await User.create({
            username,
            email,
            password
        });

        // Generate token
        const token = user.generateAuthToken();
        res.status(201).json({ token });
    }

    catch (error) {
        console.error("Error during registration:", error);
    }
}


export const user = async (req, res) => {
    try {
        const user = await User.findByPk(req.userId, {
            attributes: ["id", "email", "username"]
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    }

    catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
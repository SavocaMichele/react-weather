import jwt from "jsonwebtoken";


/**
 * Authentication middleware to verify JWT tokens in incoming requests.
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const [scheme, token] = authHeader.split(" ");

    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    if (scheme !== "Bearer" || !token) {
        return res.status(401).json({ message: "Invalid authorization header format" });
    }

    try {
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error("JWT_SECRET not configured");
        }

        const decoded = jwt.verify(token, secret);
        req.userId = decoded.id;

        next();
    }

    catch (error) {
        console.error("Auth error:", error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

export default authMiddleware;
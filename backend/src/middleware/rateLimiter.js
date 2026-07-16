import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
try {
    const { success } = await ratelimit.limit(`rateLimiter:${req.ip}`); // Use the requester's IP address as the key for rate limiting
    if (!success) {
        return res.status(429).json({ message: "Too many requests, please try again later." });
    }
    next();

}
catch (error) {
    console.error("Error in rateLimiter middleware:", error);
    next(error); // Pass the error to the next middleware (error handler)
    return res.status(500).json({ message: "Internal Server Error" });
}
}

export default rateLimiter;
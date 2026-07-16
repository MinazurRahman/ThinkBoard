import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


//middlewares
app.use(cors(
  {
    origin: "http://localhost:5173", // Allow requests from any origin
  }
)); // Middleware to enable Cross-Origin Resource Sharing (CORS) for all routes

app.use(express.json());  // Middleware to parse incoming JSON requests
app.use(rateLimiter); // Middleware to apply rate limiting to all routes  

// Logging middleware to log request method and URL
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url} - ${new Date().toISOString()}`);
//   next();
// })

app.use("/api/notes", notesRoutes);

// Start the server after connecting to the database
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch((error) => {
  console.error("Error connecting to the database:", error);
  process.exit(1); // Exit the process with an error code
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/dbconnection.js";
import reflectifyRoutes from "./routes/reflection.route.js";

const app = express();

dotenv.config();

// Middleware
app.use((req, res, next) => {
  console.log(`👉 ${req.method} ${req.originalUrl}`);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// ✅ Register routes BEFORE server starts
app.use("/api/reflectify", reflectifyRoutes);

// Optional: errorHandler
import { errorHandler } from "./middlewares/errorHandler.js";
app.use(errorHandler);

// ✅ Start the server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server listening on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("❌ Failed to start the server");
    process.exit(1);
  }
};

startServer();

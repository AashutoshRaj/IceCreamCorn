import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();



// ===== Database Connection =====
connectDB();

// ===== App Initialization =====
const app = express();
app.use(cors());
app.use(bodyParser.json());


// ===== Routes =====

app.use("/api/user", userRoutes);



// ===== Server =====
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

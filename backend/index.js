import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";
import marqueeRouter from "./routes/marquee.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
app.get("/", (req, res) => {
  res.send("Backend Working");
});
app.get("/api/message", async (req, res) => {
  try {
    const message = "Hello from the backend!";
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch message" });
  }
});

connectDB();

app.use("/api/blogs", blogRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/news", newsRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/marquee", marqueeRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

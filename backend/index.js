import express from "express";
const app = express();

app.use(express.json());

app.get("/api/message", async (req, res) => {
  try {
    const message = "Hello from the backend!";
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch message" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

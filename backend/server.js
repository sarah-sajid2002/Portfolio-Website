const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserMessages = require("./model/userMessages"); // Correct import

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" })); // Adjust if your frontend runs on another port, like Vite's default 5173
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/portfolioWebsite", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.status(200).json({ message: "server started" });
});

// Add a message
app.post("/post", async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Debugging line

    const newMessage = new UserMessages(req.body);
    await newMessage.save();

    res.status(201).json(newMessage); // 201 for created
  } catch (error) {
    console.error("Error adding message:", error); // Log errors if any
    res.status(500).json({ error: "Failed to add message" });
  }
});

// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

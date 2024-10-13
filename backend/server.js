const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const UserMessages = require("./model/userMessages"); // Correct import
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:5173" })); // Adjust if your frontend runs on another port, like Vite's default 5173
app.use(express.json());
console.log("MongoDB URI:", process.env.MONGODB_URI); // Debugging

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB Atlas connection error:", err));

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

// step 3 on heroku
if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile;
    path_resolve(__dirname, "frontend", "build", "index.html");
  });
}
// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
PORT = 4000;
require("./db/connection");
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send(200).json("server start");
});
app.listen(PORT, () => {
  console.log(`server starts at ${PORT}`);
});

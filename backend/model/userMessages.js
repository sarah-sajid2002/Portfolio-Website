const mongoose = require("mongoose");

const msgsSchema = new mongoose.Schema(
  {
    name: {
      type: String, // String should be without quotes
      required: true,
    },
    email: {
      type: String, // String should be without quotes
      required: true,
    },
    message: {
      type: String, // String should be without quotes
      required: true,
    },
  },
  { timestamps: true }
);

// Define and export the model
const UserMessages = mongoose.model("userMessages", msgsSchema);
module.exports = UserMessages;

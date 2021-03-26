const mongoose = require("mongoose");
const User = require("./userModel");
const EqType = require("./eqtypeModel");
const equipmentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Issued", "Available"],
  },
  issuedTo: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  issuedDate: {
    type: Date,
  },
  type: {
    type: mongoose.Schema.ObjectId,
    ref: "Eqtype",
  },
  history: [
    {
      issuedDate: Date,
      issuedTo: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    },
  ],
});

const Equipment = mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment;

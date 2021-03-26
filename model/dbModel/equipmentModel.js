const mongoose = require("mongoose");

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
    type: mongoose.Schema.Object,
    ref: "User",
  },
  issuedDate: {
    type: Date,
  },
  type: {
    type: mongoose.Schema.Object,
    ref: "Eqtype",
  },
  history: [
    {
      issuedDate: Date,
      issuedTo: {
        type: mongoose.Schema.Object,
        ref: "User",
      },
    },
  ],
});

const Equipment = mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment;

const mongoose = require("mongoose");

const eqtypeSchema = new mongoose.Schema({
  equipments: [
    {
      type: mongoose.Schema.Object,
      ref: "Equipment",
    },
  ],
  name: {
    type: String,
    req: [true, "Equipment Type must have a name"],
  },
});

const Eqtype = mongoose.model("Eqtype", eqtypeSchema);
module.exports = Eqtype;

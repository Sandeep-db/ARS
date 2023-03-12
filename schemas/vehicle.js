const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    typer: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  available: {
    type: Boolean,
    required: true,
    default: true,
  },
  timestamps: true,
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;

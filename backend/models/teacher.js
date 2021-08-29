const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  specialty: String,
  dni: String,
  address: String,
  telephone: String,
  email: String,
});

const teacher = mongoose.model("teacher", teacherSchema);
module.exports = teacher;

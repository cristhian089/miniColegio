const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  dni: String,
  address: String,
  telephone: String,
  email: String,
  course: String,
});

const student = mongoose.model("student", studentSchema);
module.exports = student;

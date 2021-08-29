const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  description: String,
  credits: String,
  dbStatus: Boolean,
});

const course = mongoose.model("course", courseSchema);
module.exports = course;

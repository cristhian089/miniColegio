const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  description: String,
  competence: String,
});

const subject = mongoose.model("subject", subjectSchema);
module.exports = subject;

const Course = require("../models/course");

const registerCourse = async (req, res) => {
  if (!req.body.description || !req.body.credits)
    return res.status(400).send("Incomplete data");

  let existingCourse = await Course.findOne({
    description: req.body.description,
  });
  if (existingCourse) return res.status(400).send("The course already exists");

  let course = new Course({
    description: req.body.description,
    credits: req.body.credits,
    dbStatus: true,
  });

  let result = await course.save();
  if (!result) return res.status(400).send("Failed to register course");
  return res.status(200).send({ result });
};

const listCourse = async (req, res) => {
  let course = await Course.find();
  if (!course || course.length === 0)
    return res.status(400).send("Empty course list");
  return res.status(200).send({ course });
};

module.exports = { registerCourse, listCourse };

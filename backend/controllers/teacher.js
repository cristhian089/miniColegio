const Teacher = require("../models/teacher");

const registerTeacher = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.LastName ||
    !req.body.specialty ||
    !req.body.dni ||
    !req.body.address ||
    !req.body.telephone ||
    !req.body.email
  )
    return res.status(400).send("Incomplete data");

  let existingTeacher = await Teacher.findOne({
    email: req.body.email,
  });
  if (existingTeacher)
    return res.status(400).send("The teacher already exists");

  let teacher = new Teacher({
    name: req.body.name,
    LastName: req.body.LastName,
    specialty: req.body.specialty,
    dni: req.body.dni,
    address: req.body.address,
    telephone: req.body.telephone,
    email: req.body.email,
  });

  let result = await teacher.save();
  if (!result) return res.status(400).send("Failed to register teacher");
  return res.status(200).send({ result });
};

const listTeacher = async (req, res) => {
  let teacher = await Teacher.find();
  if (!teacher || teacher.length === 0)
    return res.status(400).send("Empty teacher list");
  return res.status(200).send({ teacher });
};

module.exports = { registerTeacher, listTeacher };

const Teacher = require("../models/teacher");
const bcrypt = require("bcrypt");
const Role = require("../models/role");

const registerTeacher = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.lastName ||
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

    let hash = await bcrypt.hash(req.body.password, 10);

    let role = await Role.findOne({ name: "user" });

    if (!role) return res.status(400).send("No role was assigned");


  let teacher = new Teacher({
    name: req.body.name,
    lastName: req.body.lastName,
    specialty: req.body.specialty,
    dni: req.body.dni,
    address: req.body.address,
    telephone: req.body.telephone,
    email: req.body.email,
    password: hash,
    roleId: role._id,
    dbStatus: true,
  });

  let result = await teacher.save();
  if (!result) return res.status(400).send("Failed to register teacher");
  try {
    let jwtToken = teacher.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }

};

const listTeacher = async (req, res) => {
  let teacher = await Teacher.find();
  if (!teacher || teacher.length === 0)
    return res.status(400).send("Empty teacher list");
  return res.status(200).send({ teacher });
};

module.exports = { registerTeacher, listTeacher };

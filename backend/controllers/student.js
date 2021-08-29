const Student = require("../models/student");
const bcrypt = require("bcrypt");
const Role = require("../models/role");

const registerStudent = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.lastName ||
    !req.body.dni ||
    !req.body.address ||
    !req.body.telephone ||
    !req.body.email
  )
    return res.status(400).send("Incomplete data");

  let existingStudent = await Student.findOne({
    email: req.body.email,
  });
  if (existingStudent)
    return res.status(400).send("The student already exists");

  let hash = await bcrypt.hash(req.body.password, 10);

  let role = await Role.findOne({ name: "user" });

  if (!role) return res.status(400).send("No role was assigned");

  let student = new Student({
    name: req.body.name,
    lastName: req.body.lastName,
    dni: req.body.dni,
    address: req.body.address,
    telephone: req.body.telephone,
    email: req.body.email,
    password: hash,
    roleId: role._id,
    dbStatus: true,
  });

  let result = await student.save();
  if (!result) return res.status(400).send("Failed to register student");
  try {
    let jwtToken = student.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

const listStudent = async (req, res) => {
  let student = await Student.find();
  if (!student || student.length === 0)
    return res.status(400).send("Empty student list");
  return res.status(200).send({ student });
};

module.exports = { registerStudent, listStudent };

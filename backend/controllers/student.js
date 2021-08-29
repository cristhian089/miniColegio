const Student = require("../models/student");

const registerStudent = async(req, res) =>{
    if(!req.body.name || !req.body.LastName || !req.body.dni || !req.body.address || !req.body.telephone || !req.body.email) return res.status(400).send("Incomplete data");

    let existingStudent = await Student.findOne({
        email: req.body.email,
    });
    if (existingStudent) return res.status(400).send("The student already exists");

    let student = new Student({
        name: req.body.name,
        LastName: req.body.LastName,
        dni: req.body.dni,
        address: req.body.address,
        telephone: req.body.telephone,
        email: req.body.email,
      });

      let result = await student.save();
      if (!result) return res.status(400).send("Failed to register student");
      return res.status(200).send({ result });
};

const listStudent = async (req, res) => {
    let student = await Student.find();
    if (!student || student.length === 0)
      return res.status(400).send("Empty student list");
    return res.status(200).send({ student });
  };

  module.exports = { registerStudent, listStudent };
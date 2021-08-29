const Subject = require("../models/subject");

const registerSubject = async(req,res) =>{
    if (!req.body.description || !req.body.competence)
    return res.status(400).send("Incomplete data");

  let existingSubject = await Subject.findOne({
    description: req.body.description
  });
  if (existingSubject) return res.status(400).send("The subject already exists");

  let subject = new Subject({
    description: req.body.description,
    competence: req.body.competence,
  });

  let result = await subject.save();
  if (!result) return res.status(400).send("Failed to register subject");
  return res.status(200).send({ result });
};

const listSubject = async (req, res) => {
  let subject = await Subject.find();
  if (!subject || subject.length === 0)
    return res.status(400).send("Empty subject list");
  return res.status(200).send({ subject });
};

module.exports = { registerSubject, listSubject };
const express = require("express");
const router = express.Router();
const SubjectController = require("../controllers/subject");

router.post(
    "/registerSubject",
    SubjectController.registerSubject
  );
  router.get("/listSubject", SubjectController.listSubject);

  module.exports = router;
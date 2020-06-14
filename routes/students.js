var express = require("express");
var router = express.Router();
const { Campus, Student } = require("../database/models");
const { Sequelize } = require("sequelize/types");

//route to get all students
router.get("/", async (req, res, next) => {
  try {
    students = await Student.findAll();
    console.log(students);
    res.status(200).json(students);
  } catch (err) {
    //incase of error pass it to the middleware
    next(err);
  }
});
//route to get one student from their id
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id);
    campus = Campus.findByPk(student.campusId).name;
    Student = { student, campusName: campus };
    console.log(student);
    res.status(200).json(student);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});
module.exports = router;

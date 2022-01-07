import student from "../models/student.js";

export const getStudent = (req, res) => {
  student
    .find()
    .then((student) => {
      return res.json(student);
    })
    .catch((err) => res.status(400).json(err.message));
};

export const addStudent = (req, res) => {
  const newStudent = new student(req.body);
  newStudent
    .save()
    .then((student) => {
      return res.json(student);
    })
    .catch((err) => res.status(400).json(err.message));
};

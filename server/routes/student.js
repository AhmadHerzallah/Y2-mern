import express from "express";
import { getStudent } from "../controllers/student.js";
// import { addStudent } from "../controllers/student.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("router is working");
});
router.get("/", getStudent);
// router.post("/addStudent", addStudent);

export default router;

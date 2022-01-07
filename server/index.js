import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import studentRoutes from "./routes/student.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

const uri =
  "mongodb+srv://ahmad:8JrSgbvR.7rH5M5@cluster0.zjkmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`connection established and running on port: ${PORT}`);
    }),
  )
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "hello world",
  });
});
app.use("/students", studentRoutes);

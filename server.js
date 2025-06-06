import express from "express";
import cors from "cors";
import { userUpdateTemplate } from "./nodemailer.js";
import messageRouter from "./routers/messageRouter.js"; // default import

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Server is up and running",
  });
});

app.use("/api/v1/message", messageRouter);
app.post("/", (req, res) => {
  try {
    console.log(req.body);
    //implement nodemailer
    userUpdateTemplate(req.body);

    res.json({
      message: "TODO",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});

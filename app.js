const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const check = require("./check.json");
const data = require("./data.json");
const contactRouter = require("./src/route/contactRouter.js")


app.use(cors());
app.use("/api/data", (req, res) => {
  res.json(check);
});
app.use("/api/summary", (req, res) => {
  res.json(data);
});

app.use("/api", contactRouter);

const start = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected!");
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(`Could not connect due to ${error.message}`);
  }
};
start();

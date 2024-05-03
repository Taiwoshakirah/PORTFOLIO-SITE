const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors")
// const data = require("./data.json")
const check = require("./check.json")
dotenv.config()
const app = express();
const port =process.env.PORT || 3000;

// app.get("/api/", (req, res) => {
//   res.send("Home");
// });
// app.get("/api/portfollio", (req, res) => {
//   res.send("Our Portfollio");
// });
app.use(cors())
app.use("/api/data", (req, res) => {
    res.json(check);
  });

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

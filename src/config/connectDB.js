const mongoose = require("mongoose");

const connectDB = async (url) => {
  const connection = await mongoose.connect(url, {
    dbName: "PF",
  });
};

module.exports = connectDB;

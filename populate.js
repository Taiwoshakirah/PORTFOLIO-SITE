const dotenv = require("dotenv")
dotenv.config()

const connectDB = require("./src/config/connectDB.js")
const data = require("./check.json") 

const populateDBWithTopics = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await portfolio.insertMany(data)
   
    console.log("ready");
  } catch (error) {
    console.log(`Could not upload because of ${error.message}`);
  }
};

populateDBWithTopics();
const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController.js");

// Define a methodNotAllowed function to handle unsupported HTTP methods
const methodNotAllowed = (req, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
};

// Define routes
router.route("/contact").post(contactController.contactUs).all(methodNotAllowed);

module.exports = router;
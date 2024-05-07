const Contact = require("../model/contact.js");

const contactUs = async (req, res, next) => {
    try {
        if (!req.body || !req.body.name || !req.body.email || !req.body.phone || !req.body.message) {
            return res.status(400).json({
                message: "Please provide name, email, phone, and message in the request body",
            });
        }

        const { name, email, phone, message } = req.body;

        // Create a new document in the Contact collection
        const newMessage = await Contact.create({ name, email, phone, message });

        res.status(200).json({ message: "Message Sent Successfully", newMessage });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
            // Handle duplicate key error for the 'name' field
            return res.status(400).json({ message: "A message from this name already exists." });
        } else {
            // Handle other errors
            next(error.message);
        }
    }
};

module.exports = { contactUs };
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// POST route to handle contact form data
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const contactsFilePath = path.join(__dirname, "contacts.json");
    
    let contacts = [];
    if (fs.existsSync(contactsFilePath)) {
        const data = fs.readFileSync(contactsFilePath, "utf8");
        contacts = JSON.parse(data);
    }
    
    contacts.push({ name, email, message, date: new Date() });
    
    fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2));

    res.status(200).json({ message: "Your message has been saved!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
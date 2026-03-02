const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/users');
const UserRegistration=require('./models/registration');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Storage", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Secret key for JWT
const JWT_SECRET = 'doyouknowthatiamnottherealchisistherealcoder54321'; // Replace with your own secret key

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // Generate a token
                    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
                    res.json({ message: "Success", token });
                } else {
                    res.status(400).json({ message: "Invalid Password" });
                }
            } else {
                res.status(400).json({ message: "User Not Exists" });
            }
        })
        .catch(err => res.status(500).json({ message: "Error during login" }));
});

// Signup route
app.post('/signup', (req, res) => {
    console.log('Request body:', req.body);
    UserModel.create(req.body)
        .then(user => {
            const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: "User created", token });
        })
        .catch(err => {
            console.error('Error during user creation:', err);
            res.status(500).json({ message: "Error during registration" });
        });
});


// Route to handle form submission
app.post('/register', (req, res) => {
    UserRegistration.create(req.body)
        .then(user => {
            res.json({ message: "Registration successful", user });
        })
        .catch(err => res.status(500).json({ message: "Error during registration", error: err }));
});

const fs = require('fs');

// Read the PDF file
const pdfPath = './pdf/pdf.pdf';
const pdfFile = fs.readFileSync(pdfPath);

// Convert to Base64
const base64Pdf = pdfFile.toString('base64');

// console.log(base64Pdf);
// const base64Pdf = "your_base64_string_here";

// Decode Base64 to buffer
const pdfBuffer = Buffer.from(base64Pdf, 'base64');

// Write the buffer to a file
fs.writeFileSync('output.pdf', pdfBuffer);




// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

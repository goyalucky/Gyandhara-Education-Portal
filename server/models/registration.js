// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    school: { type: String, required: true },
    board: { type: String, required: true },
    class: { type: String, required: true },
});

const registration = mongoose.model('registration', userSchema);

module.exports = registration;

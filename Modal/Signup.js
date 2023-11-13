// Packages
const mongoose = require("mongoose");

/**
 * Sign UP Schema For Saving Contact Details
 */
const SignUpSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    re_password: {
        type: String,
        required: true
    },
});

const Sign_up = mongoose.model('Sign_up', SignUpSchema);

// Export Sign UP
module.exports = Sign_up;
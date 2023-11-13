// Packages
const express = require("express");
const router = express.Router();

// Modal Schema
const SignUp = require("../Modal/Signup");

// Servies
const { HaveValue } = require("../Services/helper");

router.post('/sign_up', async (req, res) => {

    // Request Body
    const { first_name, last_name, password, re_password, email, phone } = req.body;

    if (!HaveValue(first_name)
        || !HaveValue(last_name)
        || !HaveValue(password)
        || !HaveValue(re_password)
        || !HaveValue(email)
        || !HaveValue(phone)) {
        return res.status(422).json({ error: "please Fill the required fields" });
    }

    try {
        const sign_up = new SignUp({ first_name, last_name, email, phone, password, re_password });
        const result = await sign_up.save();

        if (result) {
            res.status(201).json({ message: "Sign up Successfully" });
        }
    } catch (error) {
        return res.status(422).json({ error });
    }
});

// Export Router
module.exports = router;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

exports.register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const result = await User.create({ email, password});

        const token = jwt.sign({ email: result.email, id: result._id }, 'your-secret-key', { expiresIn: '1h' });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
        console.log(error);
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'your-secret-key', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong." });
    }
}
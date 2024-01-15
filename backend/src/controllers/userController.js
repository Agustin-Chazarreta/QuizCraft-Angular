const UserModel = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registerUser = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password)

        const newUser = new UserModel(req.body)

        if (!newUser) {
            return res.status(404).json({ error: "Couldn't create user" });
        }
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await UserModel.findOne({ email: email })

        if (!user) {
            return res.status(404).json({ error: "Cannot find user" });
        }

        const equalPass = bcrypt.compareSync(password, user.password)

        if (!equalPass) {
            return res.status(404).json({ error: "Pass doesnt match" });
        }

        res.status(201).json({ message: 'User login successfully', token: createToken(user) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

function createToken(user) {
    const payload = {
        userId: user._id,
        userRole: user.role
    }
    return jwt.sign(payload, "token")
}
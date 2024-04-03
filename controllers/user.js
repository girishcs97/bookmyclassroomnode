const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    const { email, username } = req.body;
    const userExist = await User.findOne({ email });
    const userNameExist = await User.findOne({ username });
    console.log("username", userNameExist)
    if (userExist) {
        return res.status(400).json({
            success: false,
            message: 'Email already exists'
        })
    }
    if (userNameExist) {
        return res.status(400).json({
            success: false,
            message: 'Username already exists'
        })
    }
    try {
        const user = await User.create({ ...req.body });
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}
exports.signin = async (req, res, next) => {
    const { username, password } = req.body;
    const userNameExist = await User.findOne({ username });
    if (!userNameExist) {
        return res.status(400).json({
            success: false,
            message: 'Username does not exist'
        })
    }
    try {
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Username and password cannot be empty'
            })
        }
        if (userNameExist && userNameExist.password === password) {
            const token = jwt.sign({
                username: userNameExist.username
            },
                'secret',
                {
                    expiresIn: "24h"
                }
            );
            res.status(200).json({
                message: 'Success',
                username: userNameExist.username,
                token: token,
            })
        } else {
            return res.status(400).json({
                success: false,
                message: 'Invalid Password. Please try again'
            })
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })

    }

}
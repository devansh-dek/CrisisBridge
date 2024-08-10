const UserServices = require("../services/user-service");

const userService = new UserServices();

async function signup(req, res) {
    try {
        console.log("email is ", req.body);
        const userData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        };
        console.log("user data is ", userData);
        const data = await userService.signup(userData);
        return res.status(201).json({
            data: data,
            success: true,
            message: 'Successfully signed up',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to sign up',
            error: error
        });
    }
}

const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        console.log("username ,pass and email are ", password, email);
        const response = await userService.login({ password, email });
        const token = response.jwt; // Ensure this token is being set correctly

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000,
        });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            response
        });
    } catch (error) {
        console.log("Error in login-controller:", error.message);
        return res.status(401).json({
            success: false,
            error: error.message // Send back the error message
        });
    }
};


const isAuthenticated = async (req, res) => {
    try {
        console.log("headers are", req);
        const token = req?.cookies?.token; // Get token from cookies
        console.log(token, 'is our token');
        if (!token) {
            throw new Error("Token not provided");
        }
        console.log(token, 'is our token');
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            response: response,
            success: true,
            message: "User is Authenticated"
        })
    }
    catch (error) {
        console.log("error is ", error);
        return res.status(404).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    signup,
    login,
    isAuthenticated
}
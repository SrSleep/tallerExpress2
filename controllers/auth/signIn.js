import User from '../../models/User.js';

let signIn = async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {isOnline: true},
        )
        console.log(req);
        return res.status(200).json({
            success: true,
            message: "User signed up successfully",
            user: {
                email: req.user.email,
            },
            token: req.token
        })
    } catch (error) {
        next(error);
    }
}

export default signIn;
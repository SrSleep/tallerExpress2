import User from '../../models/User.js';

let signIn= async (req, res, next) => {
    try {
    await User.findOneAndUpdate(
        { email: req.body.email },
        {isOnline: true},
    )
        return res.status(200).json({
            
        })
    }catch(error){
        next(error);
    }
}

export default signIn;
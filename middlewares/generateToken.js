import jwt from 'jsonwebtoken'

export default async (req, res, next) => {
    const token = jwt.sign(
        {email: req.body.email || req.user.email},
        process.env.SECRET_KEY,
        {expiresIn: "2 days"}
    )
    req.token = token
    return next()
}
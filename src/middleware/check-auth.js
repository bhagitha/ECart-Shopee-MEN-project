const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try {

        const token = req.headers.authorization.split("")[1];
        console.log("token: : :" + token);
        const decodeToken = jwt.verify(token, "secretkey");
        req.userData = { username: decodeToken.username, userid: decodeToken.userid };
        next();
    } catch (error) {
        res.status(401).json({ message: "auth failed" });
    }
}
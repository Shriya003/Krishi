const jwt = require("jsonwebtoken");
const User = require("../model/userschema");

const Authenticate = async (req, res, next) => {
    
    try {
        console.log("authenticate");
        const goole_token = req.cookies.google_token;
        // console.log(goole_token);
        if (goole_token) {
            const google_user = await User.findOne({ google_token: goole_token },{ "name": 1, "email": 1, "phoneno": 1, "address": 1 ,"imageuri":1,"usertype":1});
            req.rootUser = google_user;
            next();
        }
        else {

            const token = req.cookies.jwtoken;
            console.log("hello");
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token }, { "name": 1, "email": 1, "phoneno": 1, "address": 1 ,"imageuri":1,"usertype":1}); 
            console.log(rootUser);
            req.rootUser = rootUser;
            next();
        }

    } catch (err) {
        res.status(401).send('unauthorized : no token provided');
        console.log("this is error");
        console.log(err);
    }

}

module.exports = Authenticate;
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Authenticate = async (req,res,next) => {
    try { 
        const token = req.cookies.jwtoken;
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
              return res.status(401).json({ message: 'Token is not valid' });
            }
        
            // If the token is valid, attach the user data to the request object
            req.user = decoded;
            //console.log(req.user);
            // Continue with the next middleware or route handler
            next();
          });
       
    } catch (error) {
        res.status(401).send("Unauthorized: No Token Provided");
        console.log(error);
    }
}


module.exports = Authenticate;
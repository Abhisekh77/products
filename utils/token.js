const jwt = require("jsonwebtoken")


const generateToken = async(user) => {
    const token =await jwt.sign(
    {
        id: user._id,
        email: user.email,
        role: user.role,
        status: user.status
    }, 
    process.env.iamsecret
    ,
    );
    return token;
};

module.exports = generateToken;
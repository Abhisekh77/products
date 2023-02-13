const jwt = require("jsonwebtoken");
const isLoggedIn = (req, res, next) => {
    let token = "";

    if (req.headers.token) {
        token = req.headers.token;
    }
    
    if(req.headers.authorization){
        token = req.headers.authorization;
    }
    
    if(req.query.authoriza){
        token = req.query.authorization
    }
    
    
    const splitedData = token.split(" ");;
    token = splitedData[splitedData.length - 1]
    
    console.log("token is here", token);
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) =>{
    if(err) next(err);
    if(decoded) {
        req.currrentUser = decoded;
        next();
    }
})

    // if (token) {
    //     next();
    // }
    // else {
    //     next({ msg: "invalid token"});
    // }
};

module.exports = isLoggedIn;
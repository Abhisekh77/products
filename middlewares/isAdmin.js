const isAdmin = (req, res, next) => {
    const user = req.currentUser;
    if(user.role ==="admin") next();
    else next("you are not authorised");
};

module.exports = isAdmin;
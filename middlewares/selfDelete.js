const selfDelete = (req, res, next) => {
    const  currentUserId = req.user._id;
    const id = req.params.id;
    if (currentUserId === id) next("You cannot delete Yourself");
    else next();
};

module.exports = selfDelete;
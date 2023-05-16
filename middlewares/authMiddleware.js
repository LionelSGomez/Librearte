function authMiddleware(req, res, next) {
    res.locals.userLogged = req.session.userLogged;
    next();
}

module.exports = authMiddleware;
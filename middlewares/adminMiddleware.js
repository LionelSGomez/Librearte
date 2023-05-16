function adminMiddleware(req, res, next){
    if (!res.locals.userLogged || res.locals.userLogged.roles_id != 1 ){
        return res.render('./users/login', {
            errors: {
                email: {
                    msg: 'No tiene los permisos necesarios, por favor, inicie sesión con una cuenta de administrador.'
                }
            }
    })}
    next();
}

module.exports = adminMiddleware;
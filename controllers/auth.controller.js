const AuthController = () => {
    const isAuthorized = (roles, neededRole) => {
        return roles.indexOf(neededRole) >= 0; 
    }

    const isAuthorizedAsync = (roles, neededRole, cb) => {
        setTimeout(() => cb(roles.indexOf(neededRole) >= 0), 0);
    }
    return {isAuthorized, isAuthorizedAsync};
}

module.exports = AuthController();
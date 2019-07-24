const AuthController = () => {
    var roles;

    const setRoles = (role) => {
        roles = role; 
    }

    const isAuthorized = (neededRole) => {
        return roles.indexOf(neededRole) >= 0; 
    }

    const isAuthorizedAsync = (neededRole, cb) => {
        setTimeout(() => cb(roles.indexOf(neededRole) >= 0), 2100);
    }

    return {isAuthorized, isAuthorizedAsync, setRoles};
}

module.exports = AuthController();
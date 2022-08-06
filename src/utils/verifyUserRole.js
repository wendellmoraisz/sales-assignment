const verifyUserRole = (user, role) => {
    if (user) return user.role == role;
    return false;
}

export default verifyUserRole;
const auth = async (req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await getSingleUser({ id: decoded.id });
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Unauthorized" });
    }
};


const authorization = (roles) => (req, res, next) => {
    const userRole = roles.map((role) => role.roleName);
    const hasAccess = userRole.includes(req.user.role);
    if (!hasAccess) {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
};

module.exports = {
    auth,
    authorization,
};

const {sha512} = require('../utils');

module.exports = function ({db}) {
    return function (req, res, next) {
        if (req.url.startsWith('/login')) {
            const {username, password} = req.query;

            const admin = db.data["admin"];

            if (admin.username !== username || admin.password !== sha512(password, admin.salt).passwordHash) {
                res.sendStatus(401);
                return
            }
        }
        next();
    }
};
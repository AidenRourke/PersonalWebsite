const {sha512} = require('../utils');

module.exports = function ({pool}) {
    return function (req, res, next) {
        if (req.url.startsWith('/login')) {
            const {username, password} = req.query;

            pool.query("SELECT username, password, salt FROM admin", (err, res) => {
                res.rows.map(admin => {
                    if (admin.username !== username || admin.password !== sha512(password, admin.salt).passwordHash) {
                        res.sendStatus(401);
                    }
                })
            });
        }
        next();
    }
};
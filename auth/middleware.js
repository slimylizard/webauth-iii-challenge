const jwt = require('jsonwebtoken');
const secrets = require('../data/secret.js')

module.exports = (req, res) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message : 'Bad boys 3' })
            } else {
                req.username = decodedToken.username
                next();
            } 
        });
    } else {
        res.status(400).json({ error: 'No authorization toke provided'})
    }
};
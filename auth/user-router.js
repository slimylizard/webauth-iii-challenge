const router = require('express').Router();
const User = require('./user-model')
const authorize = require('')

router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'could not get server' })
        })
})

module.exports = router
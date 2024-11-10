const jwt = require('jsonwebtoken')

const tokenGen = (id, email, jwtSecret, expiracao) => {
    return jwt.sign({id: id, email: email}, jwtSecret, {expiresIn: expiracao})
}

const tokenVerify = () => {
    return jwt.verify
}

module.exports = {tokenGen}
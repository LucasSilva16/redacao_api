const bcrypt = require('bcrypt')

const cryptGen = (password) => {
    console.log()
    let salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

const cryptCompare = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}


module.exports = {
    cryptGen,
    cryptCompare
}
const conn = require('../data/connection')
const DataTypes = require('sequelize')

const User =  conn.define('user', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    senha: {
        type: DataTypes.TEXT,
        allowNull: false
        // allowNull defaults to true
    },
    ra: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    }
},)

const createUser = (nome, email, senha, ra) => {

    return User.create({
        nome: nome,
        email: email,
        senha:  senha,
        ra: ra
    })
}

const authUser = (email) => {
    return User.findOne({
        where: {
            email: email,
        }
    })
}

User.sync()
module.exports = {
    User,
    authUser,
    createUser
}
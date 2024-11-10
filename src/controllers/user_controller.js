const userModel = require('../models/User')
const cryptHelper = require('../helpers/crypt_helper')
const jwtHelper = require('../helpers/jwt_helper')




const authUser = async (req, res) => {
    const { email} = req.body
    const user = await userModel.authUser(email)
    .then( (user) => {
        let pass = req.body.senha
        if(user == null ) {
            res.status(204).json('E-mail inválido')
        } else {
            if (cryptHelper.cryptCompare(pass, user.senha)) {
                const token =  'bearer ' + jwtHelper.tokenGen(user.id, user.email, 'asasadaadasa', '3m')
                if( token == null) {
                    res.status(400) 
                } else {
                    res.status(200).json(token)
                }
            }
        }
    })
    .catch( erro => {
        console.error(erro)
    })
    return user
}

const createUser = async (req, res) => {
    const { nome, email, senha, ra } = req.body
    const hash = cryptHelper.cryptGen(senha)

    try {
        const newUser = await userModel.createUser(nome, email, hash, ra)
        res.status(201).json(newUser)
    } catch (error) {
        res.sendStatus(204)
        console.error(error)
    }
}

module.exports = {
    authUser,
    createUser
}

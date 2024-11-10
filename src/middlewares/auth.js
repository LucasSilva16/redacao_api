const jwt = require('jwt')

const auth = (req, res, next) => {
    const authToken = req.header['authorization']

    if(authToken != undefined) {
        const bearer = authToken.split(' ')
        let token = bearer[1]

        
    }
}
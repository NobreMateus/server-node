

class AuthController {

    req
    res
    connection

    constructor(req, res, connection){
        this.req = req
        this.res = res
        this.connection = connection
    }

    login(username, password) {
        
    }
}

module.exports = AuthController 
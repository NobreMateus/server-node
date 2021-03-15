const UserModel = require('../model/UserModel')
const md5 = require('md5')
class UserController {

    req
    res
    connection
    userModel

    constructor(req, res, connection){
        this.req = req
        this.res = res
        this.connection = connection
        this.userModel = new UserModel(connection)
    }

    createUser(data) {
        const validate = this._validateUser(data)
        if(!validate.valid){
            this.res.status(400).send(valid.message)
            return
        }
        try{
            data.password = md5(data.password)
            this.userModel.createUser(data)
            this.res.status(200).send("Registro inserido com sucesso")
        } catch(e) {
            this.res.status(400).send(e.message)
        }
    }

    readUser(id) {
        this.userModel.readUser(id)
    }

    updateUser(id, data) {
        this.userModel.updateUser(id, data)
    }

    deleteUser(id) {
        this.userModel.deleteUser(id)
    }

    _validateUser(data){
        if(!data)
            return {valid: false, message: "Sem dados fornecidos"}
        if(!(data.password))
            return {valid: false, message: "Sem password fornecido"}
        if(!(data.username))
            return {valid: false, message: "Sem username fornecido"}
        
        return {valid: true}
    }
}

module.exports = UserController
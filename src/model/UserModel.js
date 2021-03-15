
class UserModel {
    
    connection

    constructor(connection) {
        this.connection = connection
    }

    createUser(data) {
        this.connection.query(`INSERT INTO users (UserName, Password, Name, email) VALUES ('${data.username}', '${data.password}', '${data.name}', '${data.email}')`, (err) => {
            if (err) throw err
        })
    }

    readUser(id) {

    }

    updateUser(id, data) {

    }

    deleteUser(id) {
        
    }
}


module.exports = UserModel
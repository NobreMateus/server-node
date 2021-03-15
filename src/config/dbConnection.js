const mysql = require("mysql")

const connect = function() {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "chatroomDB"
    })
    con.connect((err)=>{
        if(err) throw err;
        console.log("Banco de Dados conectado com sucesso!")
    })

    return con
}

module.exports = connect
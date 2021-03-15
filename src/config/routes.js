const UserController = require('../controller/UserController')

function routes(connection, app) {

    connection.query

    app.get('/', (req, res)=>{
        res.send("Olá Mundo")
        
    })

    app.get('/email', (req, res)=>{
        res.send("Aqui é só um teste mesmo!!!")
    })

    app.get('/users', (req, res)=>{
        connection.query("SELECT * FROM users", (err, results)=>{
            if(err) throw err
            console.log(results)
            res.send(results)
        })
    })

    app.post('/users', (req, res)=>{
        userControler = new UserController(req, res, connection)
        userControler.createUser(req.body)
    })
}

module.exports = routes
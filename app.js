const express = require('express')
const routes = require('./src/config/routes')
const dbConnection = require('./src/config/dbConnection')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const server = app.listen(3000, ()=>{
    // console.log("Servidor Iniciado")
    // const connection = dbConnection()
    
    // routes(connection, app)
})

const io = require("socket.io")(server, {
    // cors: {
    //     origin: "http://localhost:3000"
    // }
})

io.on('connection',(socket)=>{
    console.log("usuario conectou")
    socket.on("sendMessage", (data)=>{
        io.emit("newMessage", data)    
    })

    socket.on("move",(data)=>{
        console.log("Ok, moveu para: "+data)
    })
})
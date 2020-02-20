var express = require("express")
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

io.on('connection', (socket) => {  
  socket.emit('Bienvenida')
  socket.on('nuevoMensaje', (message)=>{
    io.sockets.emit('enviarMensaje', message)
  })
})

app.use(express.static(__dirname + '/public'))

var server = http.listen(3000, () => {
  console.log("Servidor listo en http://127.0.0.1:3000")
})

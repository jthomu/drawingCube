const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use( express.static(__dirname+'/www') )

io.on('connection', function(socket){
  console.log('new user')

  socket.on('enter-click', function(data) {
    socket.broadcast.emit('newMsg',data)
  })

  socket.on('disconnect',function(){
    console.log('user left')
  })
})

http.listen(8000,function(err){
    if(err){
      console.log(err)
    } else {
      console.log('server is listening, visit http://localhost:8000')
    }
})

//this is the basis for a server so now we have control over both the back and front end

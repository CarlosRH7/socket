var app = require('express')();//app=express();
var express = require('express');//app=express();
var http =require('http').createServer(app);
var path = require('path');
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
    console.log('Usuario conectado!');

    socket.on('join', function(mynombre){
        socket.name=mynombre;
    });

    socket.on('chat message', function(msg){
        //console.log('mensaje: '+msg);
        //io.emit('chat message', msg);
        io.emit('chat message', socket.name+': '+msg );
    });

    socket.on('disconnect', function(){
        console.log('Usuario desconectado!');
    });
});


http.listen(3000, function(){
    console.log('escuchando en el purto 3000');
});




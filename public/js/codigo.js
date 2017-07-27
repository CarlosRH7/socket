$(function(){
    var socket = io();
    var nombre = prompt('Dame tu nombre:');
    socket.emit('join', nombre);

    $('form').submit(function(){
        socket.emit('chat message',$('#m').val());
        return false;
    });
    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
        $('#m').val('');

    })
});

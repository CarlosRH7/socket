var app = require('express')();//app=express();
var http =require('http').createServer(app);

app.get('/', function(req,res){
    res.send('<h1>Hola mundo!</h1>');
});

http.listen(3000, function(){
    console.log('escuchando en el purto 3000');
});




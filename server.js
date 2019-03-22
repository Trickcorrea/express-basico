var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Ola Mundo Novamente');
});

app.listen(3000);

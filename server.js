const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', function(req, res){
    res.send('Ola Mundo Novamente agora com git, vamos usar mais um git');
});

app.listen(port, function(){
    console.log('Server run: http://localhost:'+port)
});

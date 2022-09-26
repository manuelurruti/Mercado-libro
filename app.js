const express = require('express');

const app = express();

const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
  });

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
})
app.get('/log', function(req,res) {
    res.sendFile(path.join(__dirname,'/views/log.html'))
})

app.get('/regis', function(req,res) {
    res.sendFile(path.join(__dirname,'/views/regis.html'))
});
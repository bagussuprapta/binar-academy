const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

//routing
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index/html'));
});

app.get('/cars', function(req, res){
  res.json({
    data: "Imam"
  })
})

app.listen(3000, '0.0.0.0', () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", 3000);
});
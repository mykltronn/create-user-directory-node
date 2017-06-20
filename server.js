const express = require('express');
const app = express();

var mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

var data = require('./data.js');



app.get('/', function (req, res) {
  res.render('index', {users: data.users});
});




app.listen(8080, function(){
  console.log("Successfully started express application!");
});

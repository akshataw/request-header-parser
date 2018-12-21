var express = require('express');
var app = express();
var routes = require('./index.js');

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

var listener = app.listen(process.env.PORT || 4100, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

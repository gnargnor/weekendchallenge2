var express = require('express');
var app = express();
var path = require('path');
var port = 5000;

app.use(express.static('server/public'));

app.get('/', function(req, res){
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.get('/calc/:x/:y/:func', function(req, res){
  console.log(req.params.x);
  // res.send(req.params);
  var x = Number(req.params.x);
  var y = Number(req.params.y);
  var func = req.params.func;
  var returnCalc = 0;
  switch(req.params.func){
    case "add":
      returnCalc = x + y;
      returnCalc = returnCalc.toString();
      returnCalc2 = "" + x + " + " + y + " = " + returnCalc.toString();
      break;
    case "subtract":
      returnCalc = x - y;
      returnCalc = returnCalc.toString();
      returnCalc2 = "" + x + " - " + y + " = " + returnCalc.toString();
      break;
    case "multiply":
      returnCalc = x * y;
      returnCalc = returnCalc.toString();
      returnCalc2 = "" + x + " * " + y + " = " + returnCalc.toString();
      break;
    case "divide":
      returnCalc = x / y;
      returnCalc = returnCalc.toString();
      returnCalc2 = "" + x + " / " + y + " = " + returnCalc.toString();
      break;
    default:
      console.log('you broke it');

  }
  console.log(returnCalc);
  console.log(returnCalc2);
  res.send(returnCalc);
});

app.listen(port, function(){
  console.log('listening on port: ', port);
});

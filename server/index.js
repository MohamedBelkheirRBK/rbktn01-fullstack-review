const express = require('express');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static('client/dist'))


var {getHandler, postHandler} = require('./controller')
var {getParams, postParams} = require('./middleware')

app.use(getParams)
app.use(postParams)

app.post('/repos', postHandler);
app.get('/repos', getHandler);

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


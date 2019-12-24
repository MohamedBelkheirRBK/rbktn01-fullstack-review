const express = require('express');
let app = express();



app.use(express.static(__dirname + '/../client/dist'));

app.use(require('./getparse'))
app.use(express.json())


var {getHandler, postHandler} = require('./controller')


app.post('/repos', postHandler);

app.get('/repos', getHandler);

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


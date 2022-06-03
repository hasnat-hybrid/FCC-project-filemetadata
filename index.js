var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

const route = require('./src/route')
app.use(route)


const port = process.env.PORT;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

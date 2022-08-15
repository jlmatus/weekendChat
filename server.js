const express  = require('express');
const router   = express.Router();
const bodyParser = require('body-parser');
const response = require('./network/response');

var app = express();
app.use(router);
app.use(bodyParser.json());

router.get('/message', function(req, res) {
    response.success(req, res);
});

router.post('/message', function(req, res) {
    res.send('message added'); 
});


app.listen(3000);
console.log("Server running on port 3000");


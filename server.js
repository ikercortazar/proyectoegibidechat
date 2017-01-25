const PORT = process.env.PORT || 3000;



var express = require('express');
var app = express();

app.listen(PORT, function() {
    console.log('Chatfuel Bot-Server listening on port '+PORT+'...');
});

app.get('/*', function(req, res) {
    var jsonResponse = [];
    jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..." });
    res.send(jsonResponse);
    jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..." });
    res.send(jsonResponse);
});


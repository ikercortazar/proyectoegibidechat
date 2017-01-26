const PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();

app.listen(PORT, function() {
    console.log('Chatfuel Bot-Server listening on port '+PORT+'...');
});

app.get("/numero/:nume", function (req, res) {
    var jsonResponse = [];
    var valor = req.params.nume;
    if (valor == 500)
        jsonResponse.push("Has acertado")
    else
    jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number...  ♥"+ req.params.nume});
    res.send(jsonResponse);
});


app.get("/aleatorio", function (req, res) {
  set_attributes:
    {
        alea : Math.random().toFixed(0)
    }
});

app.get("/numero/:nume/:elegido", function (req, res) {
    var jsonResponse = [];
    var valor = req.params.nume;
    var valor2 = req.params.elegido;
    if (valor == 500)
        jsonResponse.push("Has acertado")
    else
        jsonResponse.push({ "text": "Hi. " + valor + " " + valor2});
    res.send(jsonResponse);
});
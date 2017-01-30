const PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();

app.listen(PORT, function() {
    console.log('Chatfuel Bot-Server listening on port '+PORT+'...');
});

app.get("/numero/:nume", function (req, res) {
    var jsonResponse = [];
    var valor = req.params.nume;
    var alea = (Math.random() * 9 + 1).toFixed(0);
    if (valor == alea)
        jsonResponse.push({text: "Has acertado. Yo también estaba pensando en el número " + alea})
    else
    jsonResponse.push({ "text": "No es ese número. Estaba pensando en el número "+ alea});
    res.send(jsonResponse);
});


app.get("/aleatorio", function (req, res) {
  set_attributes:
    {
        var alea= (Math.random() *100 + 1).toFixed(0)
    }
    res.json(alea);
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


app.get("/inicio/:num", function (req, res) {
    var jsonResponse = [];
    var valor = req.param("num","5");
    jsonResponse.push({"text": "Vale " + valor});
    res.send(jsonResponse);
});
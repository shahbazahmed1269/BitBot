const unirest = require('unirest');
const express = require("express");
const Botly = require("botly");

const buyEndPoint = "https://api.unocoin.com/api/trades/btc/buy"
const sellEndPoint = "https://api.unocoin.com/api/trades/btc/sell"
const port = 8080

var getRate = function (endPoint, callback) {
  unirest.get(endPoint).end(function (response) {
    if (endPoint == buyEndPoint) {
      callback(null, parseInt(response.body["buying_price"]));
    }
    else {
      callback(null, parseInt(response.body["selling_price"]));
    }
  });
}

var app = express();

app.get("/buy", function (req, res) {
  getRate(buyEndPoint, function (err, rate) {
    if (err == null) {
      res.json({ "buy": rate });
    } else {
      res.status(500).send('Something went wrong!');
    }
  })
});

app.get("/sell", function (req, res) {
  getRate(sellEndPoint, function (err, rate) {
    if (err == null) {
      res.json({ "sell": rate });
    } else {
      res.status(500).send('Something went wrong!');
    }
  })
});

app.listen(port, function () {
  console.log(`listening on port: ${port} ...`);
})

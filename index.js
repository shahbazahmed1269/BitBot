const unirest = require('unirest');
const express = require("express");
const Botly = require("botly");
const buyEndPoint = "https://www.unocoin.com/trade?buy"
const sellEndPoint = "https://www.unocoin.com/trade?sell"

var getBitcoinBuyRate = function() {
  getRate(buyEndPoint, function (err, rate) {
    if (err == null) {
      return rate;
    }
  });
}

var getBitcoinSellRate = function() {
  getRate(sellEndPoint, function (err, rate) {
    if (err == null) {
      console.log("BitCoint sell rate: Rs." + rate);
    }
  });
}

var getRate = function (endPoint, callback) {
  unirest.get(endPoint).end(function (response) {
  callback(null, parseInt(response.body));
  });
}
// Route handling using express
var app = express();
// buy endpoint
app.get("/buy", function (req, res) {
  getRate(buyEndPoint, function (err, rate) {
    if (err == null) {
    res.json({"buy": rate});
    } else {
      res.status(500).send('Something went wrong!');
    }
  })
});
// sell endpoint
app.get("/sell", function (req, res) {
  getRate(sellEndPoint, function (err, rate) {
    if (err == null) {
    res.json({"sell": rate});
    } else {
      res.status(500).send('Something went wrong!');
    }
  })
});


app.listen(3000, function () {
  console.log('listening on port 3000 ...');
})

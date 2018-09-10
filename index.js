var request = require('request')
const express = require("express")

const buyEndPoint = "https://api.unocoin.com/api/trades/btc/buy"
const sellEndPoint = "https://api.unocoin.com/api/trades/btc/sell"
const port = 80

var getRate = function (endPoint, callback) {
  request(endPoint, {json: true}, (error, res, body) => {
    if(error) { 
      callback(error, 0)
      return
    } 
    
    if (res.statusCode == 200) {
      if (endPoint == buyEndPoint) {
        callback(null, parseInt(body["buying_price"]))
      }
      else {
        callback(null, parseInt(body["selling_price"]))
      }
    } else {
      console.log(`error occured: ${body}`)
      callback(body['error']['message'])
    }
  })
}

var app = express()

app.get("/buy", function (req, res) {
  getRate(buyEndPoint, function (err, rate) {
    if (err == null) {
      res.json({ "buy": rate })
    } else {
      res.status(500).send('Something went wrong!')
    }
  })
})

app.get("/sell", function (req, res) {
  getRate(sellEndPoint, function (err, rate) {
    if (err == null) {
      res.json({ "sell": rate })
    } else {
      res.status(500).send('Something went wrong!')
    }
  })
})

app.listen(port, function () {
  console.log(`listening on port: ${port} ...`)
})

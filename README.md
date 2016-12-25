# BitBot
Simple API to fetch exchange rate of 1 bitcoin in INR,  created with Node.js and Express.
It has 2 endpoints:
1) http://bitbot-service-bitbot.44fs.preview.openshiftapps.com/sell - gives the selling rate of 1 bitcoin in Rupees
2) http://bitbot-service-bitbot.44fs.preview.openshiftapps.com/buy - gives the buying rate of 1 bitcoin in Rupees

This is my first step in learning node.js. The basic idea behind this is to deploy it to Openshift (PaaS) in a docker image. This way I will learn about node.js, express, docker, kubernetes and deployment to the cloud.

In the near future, I would want to create a facebook messenger bot to message me the buy price of 1 bitcoin when the price is the lowest in say a week or a month.

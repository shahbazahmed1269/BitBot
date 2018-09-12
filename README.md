# BitBot
Simple API to fetch exchange rate of 1 bitcoin in INR,  created with Node.js and Express.
It has 2 endpoints:
1) `/sell` (GET) - gives the selling rate of 1 bitcoin in Rupees.  
Output JSON body: `{"sell":453024}`
2) `/buy` (GET) - gives the buying rate of 1 bitcoin in Rupees.  
Output JSON body: `{"buy":503614}`

This is my first step in learning Node.js, Docker and Kubernetes. The basic idea behind this is to deploy it to Openshift (PaaS) using a docker image. This is to learn about creating docker image and how to deploy it on the cloud.


Install the app using Helm:
```
helm install -n bitbot helm
```
In the above command `-n` indicates release name of the Helm chart
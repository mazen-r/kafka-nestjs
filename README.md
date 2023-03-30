# kafka-nestjs
Simple microservices app using Kafka & Nest.js  

The app is devided into 3 microservices:  
api-gateway, auth, billing.

## How to run the app
- Install kafka  
1. Clone [kafdrop](https://github.com/obsidiandynamics/kafdrop) to your machine.
2. `cd kafdrop/docker-compose/kafka-kafdrop`
3. `docker-compose up`  

- Run the app
1. Install the packages for each service `npm install`  
2. Run each service `npm run start`

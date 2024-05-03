# Hi future developer!

Here is a guide on how to run and build, and scale this project!

## Run and build
First, you need a image for the website.

navigate to `website` folder in termial
```bash
cd website
```
then build docker image
```bash
docker build -t website .
```
Ops remember to change the image name in the `docker-compose` file if you name it something else then `website`

navigate back to root and run 

```bash
doceker compose up
```

Now you are running on `localhost:5000` (frontend) and `localhost:5001` (backend)
## Deploying

Docker Swarm or Kubernetes

## Scaling 

To scale the backend(fast_api) you need to add 
```bash
deploy: 
  replicas: x
```
  where `x` is the amount of instances of the service are running across the cluster. Place this under cad-aid-api in docker compose. a reverse proxy, like nginx, is needed to make this work. This support many services/machines to access access the same port.


## Future thoughts

Deployment thoughts: Add the containers in kubernetes or docker swarn. 
might be fun to test more microservice architecture, like putting AI models in different docker containers.
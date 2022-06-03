# AKS Workload

AKS sample workload to reach On-Premises REST API

#### Initial Setup
```
npm i express axios dotenv cors
npm i nodemon -D
```

#### Building your image
```
docker build . -t <your username>/aks-workload-api

docker images
```

#### Run the image
```
docker run -p 49160:3000 -d <your username>/aks-workload-api

# Get container ID
docker ps

# Print app output
docker logs <container id>

# Example
Running on http://localhost:49160

docker ps
```
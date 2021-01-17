# NodeJS Docker Example

- Para construir la imagen a partir del Dockerfile
```
docker build -t node_example .
```

- Para correr un contenedor a partir de la imagen creada
```
docker run -d --name node_example -p 8080:3000 node_example
```
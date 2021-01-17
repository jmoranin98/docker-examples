FROM node:lts-alpine as builder
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM iamfreee/docker-nginx-static-spa:latest
COPY --from=builder /app/build /var/www/html
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 1337
CMD [ "node", "server.js" ]

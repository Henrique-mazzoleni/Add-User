FROM node:16.3.0-alpine3.13
WORKDIR /app/src/usr

COPY package*.json ./
RUN npm install && mv node_modules ../
COPY . .

CMD ["npm", "start"]
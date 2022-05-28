FROM node:16-slim AS production

WORKDIR /usr/src/api

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm","start"]


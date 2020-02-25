FROM node:10

WORKDIR /usr/src/api

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]

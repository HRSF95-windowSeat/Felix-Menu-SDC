FROM node:8.11.2

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]
# syntax=docker/dockerfile:1
FROM alpine:3.11 
FROM node:16-alpine3.11

WORKDIR /exemplary_telegram_bot
COPY . /exemplary_telegram_bot

RUN cd /exemplary_telegram_bot
RUN npm install --only=prod

CMD npm run start
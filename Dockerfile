FROM node:14.15.4-alpine3.12
WORKDIR /home/node/app

COPY . .

RUN npm install -g @nestjs/cli@8.0.0

USER node


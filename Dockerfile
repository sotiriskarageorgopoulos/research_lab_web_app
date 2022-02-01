FROM node:alpine
MAINTAINER Sotirios Karageorgopoulos <sotiriskarageorgopoulos@gmail.com>
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]
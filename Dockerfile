FROM node:alpine
WORKDIR /usr/src/app
RUN npm set init.author.email "johan.ospina05@gmail.com"
RUN npm set init.author.name "Johan Ospina"
RUN npm set init.author.license "MIT"
RUN npm init -y
COPY --chown=node:node . .
EXPOSE 3000

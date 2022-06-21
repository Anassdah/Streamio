# base image
FROM node:lts-alpine

# set working directory
WORKDIR /app
# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --legacy-peer-deps
RUN npm install -g @angular/cli@7.3.10

# add app
COPY . /app

# start app
CMD ng serve 

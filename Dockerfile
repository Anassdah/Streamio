# syntax=docker/dockerfile:1

# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:stretch-slim as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install -legacy-peer-deps

# Generate the build of the application
RUN ng build 
# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest
EXPOSE 80
COPY ./conf.d /etc/nginx/conf.d/
COPY --from=build /usr/local/app/dist/testproject /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]


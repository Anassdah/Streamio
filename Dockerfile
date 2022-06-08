
FROM nginx:alpine
COPY ./dist/testproject ./usr/share/nginx/html

FROM nginx:latest

COPY ./dist /usr/share/nginx/html/static
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./default.conf /etc/nginx/conf.d/default.conf


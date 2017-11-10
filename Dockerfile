FROM nginx:latest

COPY dist /usr/share/nginx/html/static
COPY public/editormd /usr/share/nginx/html/static/editormd
COPY index.prod.html /usr/share/nginx/html/index.html
COPY default.conf /etc/nginx/conf.d/default.conf


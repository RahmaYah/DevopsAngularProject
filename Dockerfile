FROM nginx:latest AS ngi

copy   /dist/Angular11Crud  /usr/share/nginx/html
COPY  /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80


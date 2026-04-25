# Etapa 1: Construcción
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
# Instalación limpia
RUN npm install --quiet
COPY . .

# LIMPIEZA Y GENERACIÓN DE TIPOS
RUN rm -rf .astro && \
    npx astro sync && \
    npm run build

# Etapa 2: Producción
FROM alpine:3.20
RUN apk add --no-cache lighttpd && \
    mkdir -p /var/www/html && \
    mkdir -p /var/cache/lighttpd/compress && \
    chown -R lighttpd:lighttpd /var/www/html && \
    chown -R lighttpd:lighttpd /var/cache/lighttpd/compress

COPY --from=build /app/dist /var/www/html
COPY lighttpd.conf /etc/lighttpd/lighttpd.conf

EXPOSE 8000
USER lighttpd

CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]

FROM node:latest
LABEL version="1.0"
LABEL author="Matheus Kruger"
ENV PORT="3333"
COPY . .
WORKDIR /
RUN npm install
ENTRYPOINT npm run api:run
EXPOSE ${PORT}
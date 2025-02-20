# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18
WORKDIR /usr/src/app
COPY ./ ./
RUN npm i
RUN npm run build
RUN npm install -g serve
EXPOSE 5173
CMD ["serve", "-s","dist","-l","5173"]

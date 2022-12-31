FROM node:18-alpine AS build-app

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:18-alpine AS deploy-app

WORKDIR /app
RUN rm -rf ./*
COPY --from=build-app /app/package.json .
COPY --from=build-app /app/build .
RUN npm i --omit=dev --ignore-scripts
CMD ["node", "index.js"]
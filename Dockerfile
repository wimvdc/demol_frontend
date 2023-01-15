FROM node:18-alpine AS mol-frontend

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:18-alpine AS deploy-app

WORKDIR /app
RUN rm -rf ./*
COPY --from=mol-frontend /app/package.json .
COPY --from=mol-frontend /app/build .
RUN npm i --omit=dev --ignore-scripts
CMD ["node", "index.js"]
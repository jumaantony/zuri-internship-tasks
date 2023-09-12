FROM node:18.17.1 as build

WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn run build

FROM node:18.17.1
WORKDIR /app
COPY package.json .
RUN yarn install --only=production
COPY --from=build /app/dist ./dist
CMD yarn run start:prod

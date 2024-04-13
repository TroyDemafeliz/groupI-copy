FROM node:lts-alpine as build-stage

WORKDIR /src/app

COPY ../package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /src/app/dist /usr/share/nginx/html

COPY  ../nginx/default.conf /etc/nginx/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

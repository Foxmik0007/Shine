FROM node:16-alpine

RUN mkdir /project
WORKDIR /project

COPY . .

RUN npm install -g @angular/cli@6.0.8

RUN yarn install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]

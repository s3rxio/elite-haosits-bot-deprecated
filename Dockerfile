FROM node:alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN npm install

COPY . .

RUN yarn build
CMD ["yarn", "start"]
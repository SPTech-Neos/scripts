FROM node:21-slim

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn && yarn cache clean

COPY . .

EXPOSE 3000

CMD ["yarn", "dev", "--host", "0.0.0.0"]
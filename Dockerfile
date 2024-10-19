FROM node:latest

ENV API_BASE_URL="https://pyrchen-technogral-server-fd8e.twc1.net"

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

COPY .next .

CMD ["npm", "run", "start"]
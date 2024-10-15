FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV API_BASE_URL=pyrchen-technogral-client-c8b9.twc1.net

EXPOSE 3000

CMD ["npm", "run", "start"]
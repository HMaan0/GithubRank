FROM node:20.12.0-alpine3.19

ARG Header
ARG ORIGIN_URL

ENV Header=${Header}
ENV ORIGIN_URL=${ORIGIN_URL}

WORKDIR /src

COPY package* . 
COPY tsconfig.json . 

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "prod-start"]

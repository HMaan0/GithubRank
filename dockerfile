FROM node:20.12.0-alpine3.19

ARG Header
ARG DATABASE_URL
ARG REDIS_HOST
ARG REDIS_PORT

ENV Header=${Header}
ENV DATABASE_URL=${DATABASE_URL}
ENV REDIS_HOST=${REDIS_HOST}
ENV REDIS_PORT=${REDIS_PORT}

WORKDIR /src

COPY package* . 
COPY tsconfig.json . 
COPY ./prisma . 

RUN npm install
RUN DATABASE_URL=${DATABASE_URL} npx prisma generate

COPY . .

RUN npm run build

CMD ["npm", "run", "prod-start"]

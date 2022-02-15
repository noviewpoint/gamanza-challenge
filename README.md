# Gamanza Code Challenge

## Description

Gamanza Backend Code Challenge. App bult using [Nest](https://github.com/nestjs/nest) framework TypeScript starter
repository.

## Installation

```bash
$ npm install
```

## Postgres

Postgres database is required. To run Postgres inside Docker (install Docker beforehand), type:

```bash
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

This will pull Postgres image if you do not have it already installed and start the container. It will expose Postgres
default port 5432.

## Redis

Redis database is required. To run Redis inside Docker (install Docker beforehand), type:

```bash
$ docker run --name some-redis -p 6379:6379 -d redis
```

This will pull Redis image if you do not have it already installed and start the container. It will expose Redis default
port 6379.

## Database migrations and ORM changes to models

```bash
# re-processes orm models
$ npx prisma generate
# generates SQL files and directly runs them against the database
$ npx prisma migrate dev --name init
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## OpenAPI Swagger docs

To see API documentation, start the app and visit http://localhost:3000/api

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
(Since this is a simple test assigment I didnt create much tests).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If
you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# hilton-app

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Init the project

### Set up the .env
```sh
vi .env
```
It should include keys like below:
```
MONGO_URL=mongodb://host:port/database_name
MONGO_USER=***
MONGO_PASSWORD=***
OPENAPI_URL=http://host:port/openapi.json
TEST_SERVER_URL=http://host:host
```

### Install node_modules
```sh
npm install
```

## Start to develop

```sh
npm run dev
```

## Test the project

```sh
npm run test
```

## Run the application
The rest server
```sh
npm start
```
The graphql server
```sh
npm run start:graphql
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Deploy the project in a Docker approach.
Login your server, and clone the project from github  
```sh
ssh user@host
git clone ***
```

To build a docker image
```sh
npm run docker:build
```
To run a container
```sh
npm run docker:run
```
To see the container status
```sh
docker ps
```
Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file


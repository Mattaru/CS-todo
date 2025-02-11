### Skeleton:
##### ```server``` - DENO+HONO
##### ```client``` - SVELT
##### ```db``` - PSQL+FLYWAY
##### ```e2e-tests``` - PLAYWRIGHTS.
### Working process:
1. For run whole project in a docker container:
``` bash
# Build container
docker compose up --build -d
```
``` bash
# Stop container
docker compose stop
```
2. For work only with the client locally:
``` bash
# Go to the client folder
cd client
```
``` bash
# Install the dependencies
deno install --allow-scripts
```
``` bash
# Run the client
deno run dev --open
```
### e2e tests:
For run playwright test:
``` bash
# Up the docker container
docker compose up --build -d
```
``` bash
# Run the tests
docker compose run --rm --entrypoint=npx e2e-tests playwright test
```
``` bash
# Stop the docker container
docker compose stop
```
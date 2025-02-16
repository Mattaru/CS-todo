### Skeleton:
##### ```server``` - DENO+HONO
##### ```client``` - SVELT
##### ```db``` - PSQL+FLYWAY
##### ```e2e-tests``` - PLAYWRIGHTS.
### Working process:
1. For run whole project in a docker container:
``` bash
# Go to the client folder
cd client
```
``` bash
# Install the dependencies
deno install --allow-scripts
```
``` bash
# Go to the client folder
cd ..
```
``` bash
# Build container
docker compose up --build -d
```
``` bash
# Stop container
docker compose stop
```
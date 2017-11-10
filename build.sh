#!/bin/sh

npm run build
docker build -t mijara/appunta-frontend .
docker push mijara/appunta-frontend


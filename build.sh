#!/bin/bash

# Variables
IMAGE_NAME="mpstme-acm/pfe-24"
DATE_TAG=$(date +%Y-%m-%d-%H-%M-%S)
DOCKERFILE="Dockerfile"
ENVIRONMENT="production"
DESCRIPTION="PFE 24' Website"

# Docker Build Command
docker build . \
  --file "$DOCKERFILE" \
  --tag "$IMAGE_NAME:$DATE_TAG" \
  --tag "$IMAGE_NAME:latest" \
  --build-arg ENVIRONMENT="$ENVIRONMENT" \
  --label "maintainer=yashddev" \
  --label "version=$DATE_TAG" \
  --label "description=$DESCRIPTION" \
  --pull \
  --no-cache

# Output message
echo "Docker image built and tagged as $IMAGE_NAME:$DATE_TAG and $IMAGE_NAME:latest"

sudo docker run -p 3004:3000  mpstme-acm/pfe-24:latest
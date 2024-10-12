#!/bin/bash

# Variables
IMAGE_NAME="mpstme-acm/pfe-24"
TAG="${1:-latest}"  # Defaults to 'latest' if no tag is provided
CONTAINER_NAME="2071cc7e1a1e"

# Check if container with the same name already exists
if [ "$(docker ps -a | grep $CONTAINER_NAME)" ]; then
  echo "Container with the name '$CONTAINER_NAME' already exists. Stopping and removing it."
  docker stop "$CONTAINER_NAME"
  docker rm "$CONTAINER_NAME"
fi

# Run the Docker container
docker run -d \
  --name "$CONTAINER_NAME" \
  -p 3004:3000 \  # Modify this to the actual port your app needs
  "$IMAGE_NAME:$TAG"

# Output message
echo "Docker container '$CONTAINER_NAME' is running from image '$IMAGE_NAME:$TAG'"
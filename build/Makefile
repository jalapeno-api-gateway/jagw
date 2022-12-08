REGISTRY_USERNAME ?= jalapeno-api-gateway
REGISTRY_NAME ?= ghcr.io
REGISTRY_PASSWORD ?= $(shell cat ~/.docker/config.json | jq -r '.auths."https://index.docker.io/v1/".auth' | base64 -d | cut -d: -f2)
BUILD_ARGS_TAG ?= latest
BUILD_ARGS_DOCKERFILE ?= ./Dockerfile
SERVICES = cache-service subscription-service request-service

.PHONY: help

help:
	@echo "Usage: make [target] -e [VAR=value]"
	@echo ""
	@echo "Targets:"
	@echo "  build_<service>      		Build a service"
	@echo "  push_<service>       		Push a service to Docker Hub"
	@echo "  build                		Build all services"
	@echo "  push                 		Push all services to Docker Hub"
	@echo "  help                 		Show this help"
	@echo ""
	@echo "Variables:"
	@echo "  REGISTRY_NAME      		Registry name (default: ghcr.io)"
	@echo "  REGISTRY_USERNAME      	Registry username (default: jalapeno-api-gateway)"
	@echo "  REGISTRY_PASSWORD		Registry password"
	@echo "  BUILD_ARGS_TAG      		Tag to use for build (default: latest)"
	@echo "  BUILD_ARGS_DOCKERFILE 	Dockerfile to use for build (default: ./Dockerfile)"


build_%:
	docker build \
	--tag ${REGISTRY_NAME}/${REGISTRY_USERNAME}/$*:${BUILD_ARGS_TAG} \
	-f ${BUILD_ARGS_DOCKERFILE} \
	--build-arg SERVICE_NAME="$*" ../

build: $(SERVICES:%=build_%)

push_%:
	docker push \
	${REGISTRY_NAME}/${REGISTRY_USERNAME}/$*:${BUILD_ARGS_TAG}

push: $(SERVICES:%=push_%)
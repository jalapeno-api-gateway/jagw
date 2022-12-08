FROM golang:1.18 AS build_base

ARG SERVICE_NAME

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY . .

RUN go build -o /app/service /app/cmd/${SERVICE_NAME}/${SERVICE_NAME}.go


FROM gcr.io/distroless/base

LABEL maintainer="Julian Klaiber <julian.klaiber@ost.ch>"

WORKDIR /app
COPY --from=build_base /app/service /app/service
ENTRYPOINT ["/app/service"]
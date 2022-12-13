<p align="center">
	<img src="./docs/static/img/logo.png">
</p>
<h1 align="center">JAGW</h1>
<p align="center">
	<img src="https://img.shields.io/github/v/tag/jalapeno-api-gateway/jagw.svg?label=release&logo=github&style=flat-square">
	<img alt="Build" src="https://img.shields.io/github/workflow/status/jalapeno-api-gateway/jagw/Build%20and%20Push%20Services?label=build&logo=github&style=flat-square">
	<img alt="Documentation" src="https://img.shields.io/github/workflow/status/jalapeno-api-gateway/jagw/Deploy%20Documentation%20to%20GitHub%20Pages?label=docs&logo=github&style=flat-square">
</p>

<p align="center">
The JAGW repository contains all the microservices for the gateway.
</p>

---

## Documentation
The documentation can be found under https://jalapeno-api-gateway.github.io/jagw.

## Development
For an easy development, we propose to develop directly in the Kubernetes environment.
  
This includes the following steps:
1. Deploy the [JAGW Helm Chart](https://github.com/jalapeno-api-gateway/jagw-helm)
2. Install [Okteto VS Code Extension](https://www.okteto.com/blog/remote-kubernetes-development/)
3. Take the `example-okteto.yml` files under `dev` as example to create your own `okteto.yml`
4. Start your development container with the Okteto VS Code Extension

## How to contribute?

- Contribute code by submitting a [Pull Request](https://github.com/jalapeno-api-gateway/jagw/pulls).
- Report bugs by opening an [Issue](https://github.com/jalapeno-api-gateway/jagw/issues).
- Ask questions & open discussions by starting a [Discussion](https://github.com/jalapeno-api-gateway/jagw/discussions).

## How to develop SR-Apps?
Please have a look at the following repositories, they will help with the process:
* [demo-sr-app](https://github.com/jalapeno-api-gateway/demo-sr-app) - Demonstration SR-App which includes basic examples for interacting with the gateway
* [jagw-go](https://github.com/jalapeno-api-gateway/jagw-go) - Go client library
* [jagw-python](https://github.com/jalapeno-api-gateway/jagw-python) - Python client library
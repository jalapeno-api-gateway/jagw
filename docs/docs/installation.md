---
sidebar_position: 3
title: "Installation"
---

## Installation using Helm [Kubernetes]

To install the Jalapeño API Gateway you can use the Helm chart template in our [GitHub repository](https://github.com/jalapeno-api-gateway/jagw-helm).

You will require a running [Kubernetes](https://kubernetes.io/) cluster before getting started and [Helm](https://helm.sh/) needs to be installed locally. If you use the Helm chart as is a Kubernetes load balancer is also required.

### Install JAGW

#### 1. Clone the repository

```bash
git clone https://github.com/jalapeno-api-gateway/jagw-helm
```

#### 2. [optional] Checkout a specific version tag

If you whish to use a specific version of JAGW, you can checkout a previous tag like this.

```bash
git checkout tags/<version>
```

#### 3. Update values

Update the values in `jagw/values.yaml` according to your needs.

- inside the ``config`` section update the credentials and service addresses. Most likely only the namespaces inside the service names need to be adjusted.
- inside the ``proxy`` section update the service section to your needs. You can use NodePorts or a LoadBalancer to connect to the gateway.


#### 4. Create a namespace

Create a new namespace for the JAGW (i.e. `jagw`).

```bash
kubectl create namespace <namespace>
```

#### 5. Install the Helm chart

```bash
helm install <release-name> jagw --namespace <namespace>
```

### Upgrade JAGW

To upgrade JAGW to the newest stable version, pull the updates from the main branch, reconfigure your parameters in the file `jagw/values.yaml` and then run:

```bash
helm upgrade <release-name> jagw --namespace <namespace>
```

### Delete JAGW

To delete JAGW run these commands:

```bash
helm uninstall <release-name> --namespace <namespace>
helm delete namespace <namespace>
```

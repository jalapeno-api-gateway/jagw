---
sidebar_position: 3
title: "Installation"
---

## Installation using Helm [Kubernetes]

To install the Jalapeño API Gateway you can use the Helm chart template in our [GitHub repository](https://github.com/jalapeno-api-gateway/jagw).

You will require a running [Kubernetes](https://kubernetes.io/) cluster before getting started and [Helm](https://helm.sh/) needs to be installed locally.

### Install JAGW

#### 1. Clone the repository

```bash
git clone https://github.com/jalapeno-api-gateway/jagw
```

#### 2. Checkout `main` branch

It is important to switch to the `main` branch if you whish to use a stable release, since the default branch `dev` is used for development and contains untested images. The head of the `main` branch always contains the latest stable version.

```bash
git checkout main
```

#### 3. [optional] Checkout a specific version tag

If you whish to use a specific version of JAGW, you can checkout a previous tag like this.

```bash
git checkout tags/<version>
```

#### 4. Update values

Update the values in `jagw/values.yaml` according to your needs.

#### 5. Create a namespace

Create a new namespace for the JAGW (i.e. `jagw`).

```bash
kubectl create namespace <namespace>
```

#### 6. Install the Helm chart

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

# Jalapeño API Gateway Docs

This is the source code of the [Jalapeño API Gateway Docs Website](https://jalapeno-api-gateway.github.io/jagw/).

This website is built using [Docusaurus 2](https://docusaurus.io/).

### Installation

```
$ yarn
```

Run this command to install all node modules.

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Any commits pushed to the main branch trigger the CI/CD pipeline. All changes are automatically deployed.

### Versioning

The directory `versioned_docs/` contains the files for the individual versions.
The directory `docs/` is the working directory. Edit the files here. Once you are done, create a new version with:

```
$ yarn run docusaurus docs:version X.X.X
```

This will automatically generate the versioned files and make a new entry in `./versions.json`. This file determines which versions will be visible on the website.

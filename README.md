# Scaffold for Next.js

Includes:

* Next.js
* ESLint and Prettier
* Jest and Enzyme
* Dotenv
* Apollo (and `withData` HOC)

Create an `.env` file:

```
GRAPHQL_URI=https://at-proxy.now.sh/graphql
PORT=8080
```

Note: The `GRAPHQL_URI` and query in `pages/index.js` are just placeholders to demo `initApollo` and `withData`.

```
yarn install
yarn run dev
```

See `.nvmrc` and `package.json` for correct Node and Yarn versions.

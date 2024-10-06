import type { CodegenConfig } from "@graphql-codegen/cli";

const hasuraSchema = {
  [process.env.HASURA_GRAPHQL_URL!]: {
    headers: {
      "x-hasura-admin-secret":
        process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET || "",
    },
  },
};

const config: CodegenConfig = {
  overwrite: true,
  config: {
    skipTypename: false,
    withHooks: true,
    withHOC: false,
    withComponent: false,
    gqlImport: "@urql/core#gql",
  },
  schema: [hasuraSchema],
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  generates: {
    "./src/graphql/types.ts": {
      documents: "src/gql/*.gql",
      plugins: [
        "typescript",
        "typescript-operations",
        "urql-introspection",
        "typescript-urql",
      ],
    },
    // "./src/": {
    //   documents: ["src/**/*.gql"],
    //   preset: "near-operation-file",
    //   presetConfig: {
    //     extension: ".generated.ts",
    //     baseTypesPath: "graphql/types.ts",
    //   },
    //   plugins: [
    //     "typescript",
    //     "typescript-operations",
    //     "typescript-urql",
    //     "urql-introspection",
    //   ],
    // },
  },
};

export default config;

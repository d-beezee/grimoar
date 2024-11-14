import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: process.env.API_URL || "",
  apiFile: "./api.ts",
  apiImport: "apiSlice",
  outputFile: "index.ts",
  exportName: "api",
  hooks: true,
};

// (require codegen 1.1)  hooks: { queries: true, lazyQueries: true, mutations: true },

export default config;

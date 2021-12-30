import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  coverageProvider: "v8",
  setupFiles: ["./jest.pre-setup.ts"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  verbose: true,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;

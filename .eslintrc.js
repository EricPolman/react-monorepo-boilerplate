module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "jest"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["react-app"],
  env: {
    node: true,
    browser: true,
    jest: true,
    serviceworker: true,
  },
  ignorePatterns: ["build", ".*.js", "*.config.js", "node_modules"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-redeclare": "off",
  },
};

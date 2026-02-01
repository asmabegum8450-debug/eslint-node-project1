import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      semi: ["error", "never"],
      quotes: ["error", "single"],
    },
  },
]);

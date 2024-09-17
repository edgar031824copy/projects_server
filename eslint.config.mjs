import globals from "globals"
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin"
import typescriptEslintParser from "@typescript-eslint/parser"

const config = [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      // Base rules
      "no-console": "off",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
      "no-var": "error",
    },
    ignores: ["node_modules", "dist"],
  },
]

export default config

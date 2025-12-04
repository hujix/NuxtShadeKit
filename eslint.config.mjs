import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    plugins: {
      "prettier": eslintPluginPrettier,
    },
    rules: {},
  },
  eslintConfigPrettier,
  {
    ignores: ["app/components/ui/**"],
  }
);

/**
 * @type {import("prettier").Config}
 * @see https://prettier.nodejs.cn/docs/en/configuration.html
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: "always",
  endOfLine: "auto",
  quoteProps: "preserve",
  bracketSameLine: false,
  bracketSpacing: true,
  vueIndentScriptAndStyle: false,
  proseWrap: "never",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;

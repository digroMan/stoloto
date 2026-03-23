/** @type {import("prettier").Config} */

const config = {
  endOfLine: 'lf',
  jsxSingleQuote: true,
  printWidth: 89,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  overriders: [
    {
      files: ['*-*.js'],
    }
  ]
}

export default config;
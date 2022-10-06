// we export an object with twi objects
//  - stories
//      - indicates that all files that end with storeis.mdx or end in js, jsx, ts, or tsx are to be treated as stories for our storybook pp
//  - addons
//    - we'll cover later
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
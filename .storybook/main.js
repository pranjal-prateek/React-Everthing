

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook"
  ],

  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
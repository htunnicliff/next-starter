const path = require("path");

module.exports = {
  reactOptions: {
    fastRefresh: true,
  },
  webpackFinal: (config) => {
    // Note: Alias config should mirror tsconfig `paths`
    config.resolve.alias = {
      "@": path.resolve(__dirname, "../src"),
    };

    return config;
  },
  stories: ["../**/*.stories.@(mdx|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
  ],
};

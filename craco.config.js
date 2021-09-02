const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    presets: [],
    plugins: [["@babel/plugin-proposal-decorators", {"legacy": true}]],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
};

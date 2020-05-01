const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

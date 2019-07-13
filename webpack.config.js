const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()],
  devtool: "inline-source-map",
  watch: true,
  module: {
    rules: [
      {
        enforce: "pre",
        loader: "tslint-loader",
        test: /\.ts$/,
        exclude: [/node_modules/],
        options: {
          emitErrors: true
        }
      },
      {
        loader: "ts-loader",
        test: /\.ts$/,
        exclude: [/node_modules/],
        options: {
          configFile: "tsconfig.dev.json"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  }
};

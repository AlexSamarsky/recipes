const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  cache: false,
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "static", "frontend"),
  //   },
  //   // port: 3001,
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new BundleTracker({ filename: "./webpack-stats.json" })],
};

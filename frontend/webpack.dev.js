const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //   context: path.resolve(__dirname, "src"),
  entry: "./src/index.js",
  // stats: "none",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Development",
      template: path.join(__dirname, "src", "index.html"),
      scriptLoading: "blocking",
    }),
    new BundleTracker({ filename: "./webpack-stats.json" }),
  ],
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
    hot: true,
    devMiddleware: { writeToDisk: true },
  },
  devtool: "source-map",
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
};

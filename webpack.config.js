// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.jsx", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js",
    sourceMapFilename: "[name].[hash:8].map",
    chunkFilename: "[id].[hash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CompressionWebpackPlugin({
      algorithm: "gzip",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};

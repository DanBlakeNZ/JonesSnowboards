const path = require("path");
const PATHS = {
  build: path.join(__dirname, "./public"),
};

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = (env) => {
  return {
    stats: "errors-only",
    entry: "./src/index.js",
    output: {
      path: PATHS.build,
      filename: "bundle.js",
      publicPath: PATHS.build,
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: "file-loader?name=/fonts/[name].[ext]",
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      publicPath: "/dist/",
      historyApiFallback: true,
      writeToDisk: true,
    },
  };
};

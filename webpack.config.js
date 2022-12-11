const { VueLoaderPlugin } = require("vue-loader");
const { VuetifyLoaderPlugin } = require("vuetify-loader");
const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vuetify-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css|sass)$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        resourceQuery: /blockType=i18n/,
        type: "javascript/auto",
        loader: "@kazupon/vue-i18n-loader",
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json", ".ts", ".tsx"],
  },
  plugins: [new VueLoaderPlugin(), new VuetifyLoaderPlugin()],
};

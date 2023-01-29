module.exports = {
  publicPath: "",
  outputDir: "build",
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  },
  productionSourceMap: false
};

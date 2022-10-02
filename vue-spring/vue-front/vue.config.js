module.exports = {
  outputDir: "../src/main/resources",
  indexPath: "../static/index.html",
  lintOnSave:false,
  devServer: {
    proxy: "http://localhost:8080"
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
 
};


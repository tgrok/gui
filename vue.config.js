module.exports = {

  devServer: {
    compress: true,
    disableHostCheck: true
  },

  "transpileDependencies": [
    "vuetify"
  ],

  // no sourcemap for production
  productionSourceMap: false,

}

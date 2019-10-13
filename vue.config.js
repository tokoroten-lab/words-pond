module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/words_pond/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}

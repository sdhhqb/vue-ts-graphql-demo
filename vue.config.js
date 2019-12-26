const isProd = process.env.NODE_ENV === 'production'
console.log('vue.config isProd: ', isProd)

module.exports = {
  devServer: {
    proxy: {
      '/graphql': {
        target: 'https://levi.com.cn/api'
      }
    }
  }
}

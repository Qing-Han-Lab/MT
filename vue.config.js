/*
 * @Author: your name
 * @Date: 2020-05-25 16:09:18
 * @LastEditTime: 2020-05-26 14:29:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/vue.config.js
 */
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://t.weather.sojson.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir : 'MT_Demo',
  css: {
    loaderOptions: {
      scss: { // 全局sass
        prependData: `@import "@/style/total.scss";`
      }
    }
  }
}
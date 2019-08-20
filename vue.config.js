module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },

  //配置开发服务中的代理
  devServer: {
    proxy: {
      //请求地址以/api开头
      '/api': {
        target: 'https://m.you.163.com', // 转发的目录地址
        changeOrigin: true, // 支持跨域
         pathRewrite: { // 重写路径: 让代理服务在转发请求, 对路径进行特定修改
           '^/api': '', // 去掉路径中的/api
        },
      },
      //请求地址以/baidu开头
      '/baidu': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        pathRewrite: { 
          '^/baidu': '',
        },
      },
    }
  },
}
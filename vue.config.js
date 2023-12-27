const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Keyemail's Profile"
        return args;
      })
  }
}
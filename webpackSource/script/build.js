const myWebpack = require('../lib/webpack')
const config = require('../config/webpack.config')

const compiler = myWebpack(config)
// webpack开始打包
compiler.run()
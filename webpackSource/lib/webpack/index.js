const Compiler = require('./Compiler')

function webpack(config) {
  return new Compiler(config)
}


module.exports = webpack
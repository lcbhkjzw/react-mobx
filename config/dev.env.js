'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"//112.74.53.181:8082"'  //开发
  // BASE_API: '"//47.107.215.61:18081"'  //测试

  // BASE_API: '"http://testcopyright.nfapp.southcn.com/"'
});

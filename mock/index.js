const Mock = require('mockjs')
const fs = require('fs')
const path = require('path')
module.exports = function (app) {
  app.get('/banner', function (req, res) {
    const json = fs.readFileSync(path.resolve(__dirname, 'banner.json'), 'utf-8')
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json))
  })
}


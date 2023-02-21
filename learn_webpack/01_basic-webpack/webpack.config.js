const path = require('path');

module.exports = {
    // 入口文件
    entry:'./src/index.js',
    // 输出目录
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'main.js'
    }
}
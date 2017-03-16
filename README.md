# TruckFriendCircle App

使用 Weex 和 Vue 开发的原生应用

``` bash

npm install

# 生成 Web 平台和 native 平台可用的 bundle 文件
# 位置：
# dist/index.web.js
# dist/index.web.js
npm run build

# 监听模式的 npm run build
npm run dev

```
# 将生成的 bundle 文件拷贝到 Android 项目的资源目录
npm run copy:a

# 将生成的 bundle 文件拷贝到 iOS 项目的资源目录
npm run copy:ios

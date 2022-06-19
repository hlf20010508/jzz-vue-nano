本程序为jzz-vue精简版

完整版项目https://github.com/hlf20010508/jzz-vue.git

<br/>

安装依赖
```
npm install
```

<br/>

在开发环境下运行
```
npm run dev
```
浏览器输入127.0.0.1:8080即可看到界面

<br/>

用webpack将项目打包成html和js交给后端运行

此处已更改过package.json第10行build，会自动将build的dist更新到jzz-sanic-nano文件夹中

需要jzz-sanic-nano项目https://github.com/hlf20010508/jzz-sanic-nano.git
```
npm run build
```

<br/>

效果展示见jzz-sanic-nano

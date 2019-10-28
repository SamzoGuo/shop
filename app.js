//app.js
import request from './utils/request.js'
App({
  //页面加载触发
  onLaunch: function () {
    request.defaults.baseURL ='https://api.zbztb.cn'
  }
})
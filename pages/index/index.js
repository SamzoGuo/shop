//index.js
import request from "../../utils/request.js"
Page({
   onLoad(){
     //测试接口
     request({
       url:"/api/public/v1/home/swiperdata"
     }).then(res=>{
       console.log(res)
     })
   }
})

//index.js
import request from "../../utils/request.js"
Page({
  //页面加载触发
   onLoad(){
     //测试接口
     request({
       url:"/api/public/v1/home/swiperdata"
     }).then(res=>{
       
       this.setData({
         result:res.data
       })
     })
     console.log(this.data)
   },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    result:{}
  },
})

//index.js
import request from "../../utils/request.js"
Page({
  data: {
    //轮播图
    banner: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    //导航菜单
    navmenu: [],
    //楼层数据
    floor:[]
  },
  //页面加载触发
  onLoad() {
    //请求轮播图数据
    request({
      url: "/api/public/v1/home/swiperdata"
    }).then(res => {
      this.setData({
        banner: res.data.message
      })
    })
    //请求菜单数据
    request({
      url: '/api/public/v1/home/catitems'
    }).then(res => {
      this.setData({
        navmenu: res.data.message
      })
    })
    //请求楼层
    request({
      url:'/api/public/v1/home/floordata'
    }).then(res=>{
      this.setData({
        floor: res.data.message
      })
    })
  }
})
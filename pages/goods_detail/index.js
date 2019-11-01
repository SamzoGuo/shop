// pages/goods_detail/index.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //商品详情
    detail: {},
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const {
      goods_id
    } = options
    request({
      url: '/api/public/v1/goods/detail',
      data: {
        goods_id
      }
    }).then(res => {
      this.setData({
        detail: res.data.message
      })
    })
  }
})
// pages/goods_list/index.js
import request from '../../utils/request.js'
Page({
  data: {
    //参数
    query: '',
    //商品列表
    goods: [],
    //请求的页数
    pagenum: 1,
    //是否显示隐藏
    isShow: true,
    //是否正在加载
    hasLoad: false
  },

  //封装获取商品数据
  getlist() {
    request({
      url: '/api/public/v1/goods/search',
      data: {
        query: this.data.query,
        pagenum: this.data.pagenum,
        pagesize: 10
      }
    }).then(res => {
      const newGoods = res.data.message.goods.map(v => {
        v.goods_price = Number(v.goods_price).toFixed(2)
        return v
      })
      //在原数组后添加数据

      //最后请求的数据小于条时，把isShow改为false
      if (res.data.message.goods.length < 10) {
        this.setData({
          isShow: false
        })
      }
      this.setData({
        goods: [...this.data.goods, ...newGoods],
        //请求完后把hasLoad改为false
        hasLoad: false
      })
    })
  },

  //  生命周期函数--监听页面加
  onLoad: function(options) {
    //获取参数
    const {
      query
    } = options
    this.setData({
      query
    })
    //调用getlist方法获取商品列表
    this.getlist()
  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function() {
    this.setData({
      pagenum: this.data.pagenum + 1
    })
    if (!this.data.hasLoad) {
      this.getlist()
      this.setData({
        hasLoad: true
      })
    }
  }
})
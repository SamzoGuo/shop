// pages/search/index.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    //输入搜索的内容
    search: '',
    //本地存储
    history: wx.getStorageSync('search')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //input的值发生改变时触发
  bindinput(event) {
    const {
      value
    } = event.detail
    if (value.trim()) {
      this.setData({
        isShow: true,
        search: value
      })
    } else {
      this.setData({
        isShow: false
      })
    }
  },
  //input按下回车键触发
  bindconfirm() {
    const arr = wx.getStorageSync('search') || []
    const arr1 = arr.filter(v => {
      return v !== this.data.search
    })
    arr1.unshift(this.data.search)
    wx.setStorageSync('search', arr1)
    wx.navigateTo({
      url: '/pages/goods_list/index?query=' + this.data.search,
    })
  },
  //点击取消清除输入框内容
  bind() {
    this.setData({
      search: '',
      isShow: false
    })
  },
  //清空搜索历史
  clear() {
    wx.clearStorageSync('search')
    this.setData({
      history: []
    })
  },
  onShow() {
    this.setData({
      history: wx.getStorageSync('search') || []
    })
  }
})
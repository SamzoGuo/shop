// pages/category/index.js
import request from '../../utils/request.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //tab栏当前选中那项
    current:0,
    //请求品牌数据
    product:[]
  },

  handleclick(event){
    this.setData({
      current: event.target.dataset.index
    })
    console.log(this.data.current)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:'/api/public/v1/categories'
    }).then(res=>{
      this.setData({
        product:res.data.message
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
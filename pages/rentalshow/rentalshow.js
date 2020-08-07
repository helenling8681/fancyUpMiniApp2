// pages/rentalshow/rentalshow.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page= this
    const id = options.id
    wx.request({
    url:`http://localhost:3000/api/v1/rentals/${id}`,
    success: (res) => {
      page.setData(res.data)
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  goToNewOrder: function(e) {
    console.log(11, e)
    const id = e.currentTarget.dataset.id
   wx.navigateTo({
     url: `/pages/new_order/new_order?id=${id}`,
   })
  },
  getUserInfo: function (e) {
    const page = this
    console.log(33,e)
    app.globalData.userInfo = e.detail.userInfo
    // console.log(88,app.globalData)
    this.setData({
      userInfo: e.detail.userInfo
    })
    wx.setStorageSync('userInfo', e.detail.userInfo)
    console.log(44,wx.getStorageSync('userInfo'))

    console.log(this.data)
    wx.request({
      url: `${app.globalData.url}/users/${getApp().globalData.userId}`,
      method: "PUT",
      data: {user: this.data.userInfo},
      success(res){
        console.log(res)
  
      }

    })
  }
})
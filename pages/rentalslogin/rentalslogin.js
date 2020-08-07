// pages/rentalslogin/rentalslogin.js
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
    // console.log(789,options)
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
    const page = this
      const id = app.globalData.userId
      wx.request({
        url: app.globalData.url + `/users/${id}/rentals`,
        success: (res) => {
          // console.log(res)
          page.setData(res.data)
        },
      })

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
  getUserInfo: function (e) {
    const page = this
    console.log(33,e)
    app.globalData.userInfo = e.detail.userInfo
    // console.log(88,app.globalData)
    this.setData({
      userInfo: e.detail.userInfo
    })
    wx.setStorageSync('userInfo', e.detail.userInfo)
    console.log(44)

    console.log(this.data)
    wx.request({
      url: `${app.globalData.url}/users/${getApp().globalData.userId}`,
      method: "PUT",
      data: {user: this.data.userInfo},
      success(res){
        console.log(res)
  
      }

    })
  },
  goToForm: function() {
    wx.navigateTo({
      url: '/pages/rentalnew/rentalnew',
    })
  },
  deleteRental: function(e) {
    let id = e.currentTarget.dataset.id
    wx.request({
      url:`${app.globalData.url}/rentals/${id}`,
      method: 'DELETE',
      success: (res) => {
        console.log(res),
        wx.reLaunch({
          url: '/pages/rentals/rentals',
        })
      }
    });
  }
})
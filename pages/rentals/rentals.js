// pages/rentals/rentals.js
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
      wx.request({
        url: app.globalData.url + '/rentals',
        success: (res) => {
          // console.log(res)
          page.setData(res.data)
        },
      })
  },
  goToShow: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/rentalshow/rentalshow?id=${id}`,
    })
  },
  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },
  deleteRental: function(e) {
    let id = e.currentTarget.dataset.id
    wx.request({
      url: app.globalData.url+ `rentals/${id}`,
      method: 'DELETE',
      success: (res) => {
        console.log(res),
        wx.reLaunch({
          url: '/pages/rentals/rentals',
        })
      }
    });
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
  goToForm: function(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/rentalnew/rentalnew?id=${id}`,
    })
  },
})
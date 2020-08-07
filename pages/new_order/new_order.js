// pages/new_order/new_order.js
const app = getApp()

import moment from "../../utils/moment.js"
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
    this.setTodaysDate()
    // console.log(moment().endOf('day').fromNow())
    // console.log(options)
    const page = this
    const rentalId = options.id
    wx.request({
      url:`${app.globalData.url}/rentals/${rentalId}`,
      success: (res) => {
        // console.log(res)
        page.setData({rental: res.data})
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
  bindStartDateChange: function (e) {
    // console.log('StartDate', e.detail.value)
    const startDate = e.detail.value
    const prettyStartDate = moment(startDate).format('ll')
    console.log(1, prettyStartDate)
    this.setData({
      startDate: prettyStartDate
    })
  },
  bindEndDateChange: function (e) {
    // console.log('EndDate', e.detail.value)
    this.setData({
      endDate: moment(e.detail.value).format('ll')
    })
  },
  setTodaysDate: function() {
    const today = moment().format('ll')
    this.setData({startDate: today, endDate: today})
    // console.log(123, this.data.startDate)
  },
  formSubmit: function (e) {
    console.log(e)
    const page =this
    const form = e.detail.value
    const order = {}
    order.start_date = form.startDate
    order.end_date = form.endDate
    order.address = form.address
    order.user_id = app.globalData.userId
    // console.log(order)
    // console.log(12,page.data)
    const rentalId = page.data.rental.id
    wx.request({
      url: `${app.globalData.url}/rentals/${rentalId}/orders`,
      method: "POST",
      data: {order: order},
      success: (res) => {
        console.log(res)
        
      }
    })

  }
  
})
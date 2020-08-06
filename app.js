//app.js
App({
  onLaunch: function () {
    const host = this.globalData.url
    console.log('beginning login')
    wx.login({
      success: (res) => {
        console.log(res)
        // insert next code here
  
        wx.request({
          url: host + '/users',
          method: 'post',
          data: {
            code: res.code
          },
          // insert next code here
          success: (res) => {
            console.log(res)
            this.globalData.userId = res.data.userId
          }
        })
      }
    })
  },
  globalData: {
    hasUserInfo: true,
    url: "http://localhost:3000/api/v1",
    // url: "http://fancyup.herokuapp.com/api/v1"
  }
})

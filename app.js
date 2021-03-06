// app.js
const AV = require('./utils/av-weapp-min.js')
const config = require('./key')
// Initialization of the app

AV.init({
  appId: config.appId,
  appKey: config.appKey,
  serverURLs: "https://pfxiud5s.lc-cn-n1-shared.com"
});
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
            console.log(222, res)
            this.globalData.userId = res.data.userId

            const id = res.data.userId
            wx.request({
              url: `${this.globalData.url}/users/${id}`,
              success: (res) => {
                // console.log(res)
                this.globalData.user = res.data
                console.log(this.globalData)
                }
  
            })

          }
        })
      }
    })
  },
  globalData: {
    hasUserInfo: true,
    // url: "http://localhost:3000/api/v1",
    url: "http://fancyup.herokuapp.com/api/v1"
  }
})

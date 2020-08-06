// pages/rentalnew/rentalnew.js
Page({

  /**
   * Page initial data
   */
  data: {
    imgs: [],
    picPaths: [],
    categories: ['suit', 'pants', 'tie', 'shirt', 'coat', 'jacket', 'sweater', 'belt', 'shoes'],
    categoriesArray: [
      {
        id: 0,
        name: 'suit'
      },
      {
        id: 1,
        name: 'pants'
      },
      {
        id: 2,
        name: 'tie'
      },
      {
        id: 3,
        name: 'shirt'
      },
      {
        id: 4,
        name: 'coat'
      },
      {
        id: 5,
        name: 'jacket'
      },
      {
        id: 6,
        name: 'sweater'
      },
      {
        id: 7,
        name: 'belt'
      },
      {
        id: 8,
        name: 'shoes'
      },
    ],
    categoryIndex: 0,
    occasions: ['formal', 'cocktail', 'casual', 'black tie'],
    occasionsArray: [
      {
        id: 0,
        name: 'formal'
      },
      {
        id: 1,
        name: 'cocktail'
      },
      {
        id: 2,
        name: 'casual'
      },
      {
        id: 3,
        name: 'black tie'
      },
    ],
    occasionIndex: 0,
  },
  // chooseImageTap: function () {
  //   var that = this;
  //   wx.showActionSheet({
  //     itemList: ['Choose image from album', 'Take a photo'],
  //     itemColor: "#00000",
  //     success: function (res) {
  //       if (!res.cancel) {
  //         if (res.tapIndex == 0) {
  //           that.chooseWxImage('album')
  //         } else if (res.tapIndex == 1) {
  //           that.chooseWxImage('camera')
  //         }
  //       }
  //     }
  //   })
  // }, 
  // chooseWxImage: function (type) {
  //   var that = this;
  //   var imgsPaths = that.data.imgs;
  //   wx.chooseImage({
  //     sizeType: ['original', 'compressed'],
  //     sourceType: [type],
  //     success: function (res) {
  //       console.log(res.tempFilePaths[0]);
  //       that.upImgs(res.tempFilePaths[0], 0) //调用上传方法
  //     }
  //   }) 
  // },
  // upImgs: function (imgurl, index) {
  //   var that = this;
  //   wx.uploadFile({
  //     url: 'http://localhost:3000/api/v1/rentals',//
  //     filePath: imgurl,
  //     name: 'file',
  //     header: {
  //       'content-type': 'multipart/form-data'
  //     },
  //     formData: null,
  //     success: function (res) {
  //       console.log(res) //接口返回网络路径
  //       var data = JSON.parse(res.data)
  //         that.data.picPaths.push(data['msg'])
  //         that.setData({
  //           picPaths: that.data.picPaths
  //         })
  //         console.log(that.data.picPaths)
  //     }
  //   })
  // },
  bindCategoryChange: function(e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    console.log(e)
    this.setData({
      categoryIndex: e.detail.value
    })
  },
  bindOccasionChange: function(e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      occasionIndex: e.detail.value
    })
  },
  formSubmit: function (e) {
    //...
    let name = e.detail.value.name;
    let size = e.detail.value.size;
    let color = e.detail.value.color;
    let url = e.detail.value.url;
    let category = this.data.categoriesArray[e.detail.value.category].name;
    let occasion = this.data.occasionsArray[e.detail.value.occasion].name;
    let id = this.data.id;

    const rental = {
      name: name,
      category: category,
      occasion: occasion,
      size: size,
      color: color,
      size: size,
      image: url
      //necessary to have user_id
    }
    console.log(rental)
    const page = this
    if (page.data.id) {
      // update request... PUT request
      wx.request({
        url: `http://fancyup.herokuapp.com/api/v1/rentals/${page.data.id}`,
        method: 'PUT',
        data: rental,
        success: (res) => {
          wx.redirectTo({
            url: `/pages/rentalshow/rentalshow?id=${res.data.id}`,
          })
        }
      })
    } else {
      wx.request({
        url: 'http://fancyup.herokuapp.com/api/v1/rentals',
        method: 'POST',
        data: rental,
        success: (res) => {
          console.log(res)
          wx.reLaunch({
            url: '/pages/rentals/rentals',
          })
        }
      })
    }
  },
  formReset: function() {
    console.log('form triggers a reset event.')
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    const id = options.id
    console.log(page)
    if (id) {
      wx.request({
        url: `http://fancyup.herokuapp.com/api/v1/rentals/${id}`,
        success: (res) => {
          page.setData(res.data)
        }
      })
    } 
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
})

var app = getApp()
Page({
  data: {
    current: 0,
    listgoods: [{
      "id": '0101001',
      "name": "kkkkkZespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "111.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '0101002',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "177.0",
      "type": "3.3kg/箱"
    }, {
      "id": '0101003',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "178.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": '0102001',
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "172.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '0102002',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "171.0",
      "type": "3.3kg/箱"
    }, {
      "id": '0102003',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "174.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": '0103001',
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "177.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '0103002',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "173.0",
      "type": "3.3kg/箱"
    }, {
      "id": '0103003',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "169.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": '0201001',
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "159.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '0201002',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "149.0",
      "type": "3.3kg/箱"
    }, {
      "id": '0202001',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "139.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": '1203001',
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "159.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '1401001',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "181.0",
      "type": "3.3kg/箱"
    }, {
      "id": '1101001',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "180.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }],
    results: [{
      "banner": [{
        "pic_url": "http://img09.yiguoimg.com/e/ad/2016/160825/585749448986042649_800x400.jpg",
      },
      {
        "pic_url": "http://img11.yiguoimg.com/e/ad/2016/160927/585749449690947899_800x400.jpg",
      },
      {
        "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160923/585749449636290871_800x400.jpg",
      },
      {
        "pic_url": "http://img13.yiguoimg.com/e/ad/2016/160914/585749449480315182_800x400.jpg",
      },
      {
        "pic_url": "http://img14.yiguoimg.com/e/ad/2016/161010/585749449889390922_800x400.jpg",
      }
      ]
    },
    {
      "banner": []
    }
    ],
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    },
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [{ //假数据
      img: "avatar.png",
      name: "欢顔",
      tag: "知名情感博主",
      answer: 134,
      listen: 2234
    }],
    tabnav: {
      tabnum: 5,
      tabitem: [
        {
          "id": 0,
          "text": "养生"
        },
        {
          "id": 1,
          "text": "健身"
        },
        {
          "id": 2,
          "text": "水果"
        },
        {
          "id": 3,
          "text": "吃饭"
        },
        {
          "id": 4,
          "text": "运动"
        },
        {
          "id": 5,
          "text": "啦啦"
        },
        {
          "id": 6,
          "text": "吃屎"
        }
      ]
    }
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    //ajax请求数据
    // wx.request({
    //         url: 'http://www.htmlk.cn/json-test/lists.json',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         success: function(res) {
    //            switch1(res.data);
    //            console.log(res.data);
    //            that.setData({
    //                listgoods:res.data
    //            });
    //         }
    //     })
    //对商品进行价格排序
    console.log(this.data.listgoods);
    switch1(this.data.listgoods);
    function switch1(odata) {
      for (var i = 0; i < odata.length - 1; i++) {
        //console.log(odata[i].price);
        for (var j = 0; j < odata.length - i - 1; j++) {
          // console.log(parseInt(odata[j].price)+"-----"+parseInt(odata[j+1].price));
          if (parseInt(odata[j].price) > parseInt(odata[j + 1].price)) {
            var temp = odata[j];
            odata[j] = odata[j + 1];
            odata[j + 1] = temp;
          }
        }
      }
    };
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },

  switchSlider: function (e) {
    this.setData({
      current: e.target.dataset.index
    })
  },
  changeSlider: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  lookdetail: function (event) {
    console.log(event)
    var imgUrl = event.currentTarget.dataset.url
    console.log(imgUrl)
    var imgsArray = new Array();
    imgsArray.push(imgUrl)
    wx.previewImage({
      current: imgUrl,
      urls: imgsArray
    })
  },
  clickImage: function (event) {
    var imgUrl = event.target.dataset.url
    console.log(imgUrl)
    var imgsArray = new Array();
    imgsArray.push(imgUrl)
    wx.previewImage({
      current: imgUrl,
      urls: imgsArray
    })
  },

})

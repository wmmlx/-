Page({
  data: {
    loadingHidden: false,
    refreshHidden: true,
    loadmoreHidden: true,
    list: []
  },
  onLoad: function () {
    // console.log('loaded.');
    var that = this;
    wx.request({
        url: 'http://localhost/mock/shop.json',
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            //console.log(res.data);
            that.setData({
                list: res.data,
                loadingHidden: true
            });
        },
        fail: function(error) {
            console.log(error);
        }
    });
  },
  actionToUpper:function () {
    // console.log(1);
    var that = this;
    this.setData({
        refreshHidden: false
    });
    wx.request({
        url: 'http://localhost/mock/shoprefresh.json',
        success: function(res) {
            setTimeout(function() {
                that.setData({
                    list: res.data.concat(that.data.list),
                    refreshHidden: true
                });
            }, 1500);
        }
    });
  },
  actionToLowwer:function () {
    // console.log(2);
    var that = this;
    this.setData({
        loadmoreHidden: false
    });
    wx.request({
        url: 'http://localhost/mock/shopmore.json',
        success: function(res) {
            setTimeout(function() {
                that.setData({
                    list: that.data.list.concat(res.data),
                    loadmoreHidden: true
                });
            }, 1500);
        }
    });
  }
});

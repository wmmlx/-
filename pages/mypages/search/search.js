Page({
    data: {
        navcurrentpage: 0,
        menucurrentpage: 0,
        loadingHidden: false,
        HuaHidden: true,
        refreshHidden: true,
        loadmoreHidden: true,
        refreshHiddenHua:true,
        loadmoreHiddenHua:true,
        swiper: {
            indicatorDots: false,
            autoplay: false,
            interval: 0,
            duration: 300
        },
        menuData: ['最新', '圆珠笔画', '水彩画', '素描画', '水粉画', '手绘画', '简笔画',
            '油画', '工笔画', '彩铅画', '漫画', '国画', '马克笔画', '蜡笔画', '涂鸦',
            '插画', '速写', '工具', '其它', '白描', '电脑绘图', '关注'
        ],
        list: [],
        listHua:[]
    },
    onLoad: function() {
        var that = this;
        wx.request({
            url: 'http://localhost/mock/list.json',
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
        wx.request({
            url: 'http://localhost/mock/huabao.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                //console.log(res.data);
                that.setData({
                    listHua: res.data,
                });
            },
            fail: function(error) {
                console.log(error);
            }
        });
    },
    switchSlider: function(event) {
        this.setData({
            navcurrentpage: event.target.dataset.index
        });
    },
    switchMenu: function(event) {

        this.setData({
            menucurrentpage: event.target.dataset.index
        });
    },
    actionToupper: function() {
        //  console.log(1);
        var that = this;
        this.setData({
            refreshHidden: false
        });
        wx.request({
            url: 'http://localhost/mock/listrefresh.json',
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
    actionTolower: function() {
        //console.log(2);
        var that = this;
        this.setData({
            loadmoreHidden: false
        });
        wx.request({
            url: 'http://localhost/mock/listmore.json',
            success: function(res) {
                setTimeout(function() {
                    that.setData({
                        list: that.data.list.concat(res.data),
                        loadmoreHidden: true
                    });
                }, 1500);
            }
        });
    },
    huaToupper: function() {
      var that = this;
      this.setData({
          refreshHiddenHua: false
      });
      wx.request({
          url: 'http://localhost/mock/huabaorefresh.json',
          success: function(res) {
              setTimeout(function() {
                  that.setData({
                      listHua: res.data.concat(that.data.listHua),
                      refreshHiddenHua: true
                  });
              }, 1500);
          }
      });
    },
    huaTolower: function() {
      //console.log(2);
      var that = this;
      this.setData({
          loadmoreHiddenHua: false
      });
      wx.request({
          url: 'http://localhost/mock/huabaomore.json',
          success: function(res) {
              setTimeout(function() {
                  that.setData({
                      listHua: that.data.listHua.concat(res.data),
                      loadmoreHiddenHua: true
                  });
              }, 1500);
          }
      });
    },
    changeSlider: function(event) {
        this.setData({
            navcurrentpage: event.detail.current
        });
    }
});

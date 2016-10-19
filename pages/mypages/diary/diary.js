Page({
    data: {
        navcurrentpage: 0,
        actionSheetHidden: true,
        actionSheetItems: ['拍照', '从手机相册选择'],
        videoHidden: true,
        videoItems: ['录制', '从手机选择'],
        swiper: {
            indicatorDots: false,
            autoplay: false,
            interval: 0,
            duration: 300
        },
        videosrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        tempFilePaths: '/images/default_bmcover.jpg',
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        name: '此时此刻',
        author: '许巍',
        con: '',
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    },
    onLoad: function(params) {
        console.log(params);
        console.log(params.src);
        if (params.src) {
            this.setData({
                tempFilePaths: params.src,
                con: params.con
            })
        }
        // console.log('loaded.');
    },
    actionToupper: function() {
        //  console.log(1);
    },
    actionTolower: function() {
        //console.log(2);
    },
    switchSlider: function(event) {
        //  console.log(event.target.dataset);
        this.setData({
            navcurrentpage: event.target.dataset.index
        });
        //  console.log(this);
    },
    changeSlider: function(event) {
        this.setData({
            navcurrentpage: event.detail.current
        });
    },
    actionSheetTap: function(e) {
        wx.navigateTo({
            url: '/pages/mypages/diarydetail/mydiary'
        });
        //
        // this.setData({
        //     actionSheetHidden: !this.data.actionSheetHidden
        // });
    },
    actionSheetChange: function(e) {
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        });
    },
    bindItemTap: function(e) {
        var that = this;
        switch (e.currentTarget.dataset.name) {
            case '拍照':
                //console.log("拍照");
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function(res) {
                        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                        //var tempFilePaths = res.tempFilePaths;
                        that.setData({
                            tempFilePaths: res.tempFilePaths,
                            actionSheetHidden: !that.data.actionSheetHidden
                        });
                        //console.log(tempFilePaths);
                    }
                });
                break;
            case '从手机相册选择':
                //console.log("从手机相册选择");

                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function(res) {
                        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                        //var tempFilePaths = res.tempFilePaths;
                        that.setData({
                            tempFilePaths: res.tempFilePaths,
                            actionSheetHidden: !that.data.actionSheetHidden
                        });
                        //console.log(tempFilePaths);
                    }
                });

                break;
        }
    },
    bindButtonTap: function() {
        this.setData({
            videoHidden: !this.data.videoHidden
        });
    },
    videoChange: function() {
        this.setData({
            videoHidden: !this.data.videoHidden
        });
    },
    videobindItemTap: function(e) {
        var that = this;
        switch (e.currentTarget.dataset.name) {
            case '录制':
                wx.chooseVideo({
                    sourceType: ['camera'],
                    maxDuration: 60,
                    camera: ['front', 'back'],
                    success: function(res) {
                        that.setData({
                            videosrc: res.tempFilePaths[0],
                            videoHidden: !that.data.videoHidden
                        });
                    }
                });
                break;
            case '从手机选择':
                wx.chooseVideo({
                    sourceType: ['album'],
                    maxDuration: 60,
                    camera: ['front', 'back'],
                    success: function(res) {
                        //console.log(res);
                        that.setData({
                            videosrc: res.tempFilePaths[0],
                            videoHidden: !that.data.videoHidden
                        });
                        //console.log(that.data.videosrc);
                    },
                    videoErrorCallback: function(e) {
                        console.log('视频错误信息:')
                        console.log(e.detail.errMsg)
                    }
                });
                break;
        }
    }
});

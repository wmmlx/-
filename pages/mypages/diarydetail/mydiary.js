Page({
    data: {
        con: '',
        actionSheetHidden: true,
        actionSheetItems: ['拍照', '从手机相册选择'],
        tempFilePaths: '/images/default_bmcover.jpg'
    },
    onLoad: function() {
       console.log(1);
    },
    actionSheetTap: function() {
        wx.navigateTo({
            url: '/pages/mypages/diary/diary?con=' + this.data.con + '&src=' + this.data.tempFilePaths
        });
    },
    inputCon: function(e) {
        this.setData({
            con: e.detail.value
        });
    },
    bindButtonTap: function(e) {
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        });
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
    }
})

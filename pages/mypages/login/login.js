Page({
    data: {
        uName: '',
        uPass: ''
    },
    onLoad: function() {

    },
    inputName: function(e) {
        this.setData({
            uName: e.detail.value
        });
    },
    inputPass: function(e) {
        this.setData({
            uPass: e.detail.value
        });
    },
    bindButtonTap: function() {
      if(this.data.uName=="wmm"&&this.data.uPass=="123"){
        wx.navigateTo({
            url: '/pages/mypages/main/main'
        });
      }else {
        console.log("err");
      }
    }
});

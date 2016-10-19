Page({
    onLoad: function() {
      setTimeout(function () {
        wx.navigateTo({
            url: '/pages/mypages/search/search'
        });
      },2000);

    }
});

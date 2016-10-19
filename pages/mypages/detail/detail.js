Page({
    data: {
        current: 0,
        indicatorDots: true,
        autoplay: true,
        interval: 6300,
        duration: 1000,
        imgUrls: [
            '/images/p8.jpg',
            '/images/p9.jpg',
            '/images/p13.jpg',
        ],
        detai: {
            "title": "画画日记.彩色笔",
            "imgsrc": "/images/d1.jpg",
            "oldprice": 5.2,
            "newprice": 4.5
        }
    },
    onLoad: function(params) {
        // console.log(params);
        this.setData({
            detai: {
                "title": params.title,
                "oldprice": params.oldprice,
                "newprice": params.newprice,
                "imgsrc": params.imgsrc
            }
        });
    },
    actionToupper: function() {
        // console.log(1);
    },
    actionTolower: function() {
        // console.log(2);
    }
});

/**
 * Created by Fyus on 16/11/25.
 */
//禁止图片拖动
!function(){
    function imgdragstart(){
        return false;
    }
    for(i in document.images)
        document.images[i].ondragstart=imgdragstart;
}();

!function(){
//图片滚动
    var slider = {
        index: 0,
        len: 189,
        el: $(".iphoneScroll-wrap"),
        slide: function() {
            var self = this;
            var left = ++self.index * 189;
            self.el.animate({left: -left + "px"}, 550, function() {
                if (self.index == 4) {
                    self.index = 0;
                    self.el.css("left", 0);
                }
            });
        }
    };

    //转轮动画
    var wSlide = setInterval(function() {
        slider.slide();
    }, 4000);

}();
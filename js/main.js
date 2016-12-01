/**
 * Created by Fyus on 16/11/17.
 */
//禁止图片拖动
!function(){
    function imgdragstart(){
        return false;
    }
    for(i in document.images)
        document.images[i].ondragstart=imgdragstart;
}();

//图片效果
!(function(){
    //可视位置
    function getClient(){
        var l, t, w, h;
        l = document.documentElement.scrollLeft || document.body.scrollLeft;
        t = document.documentElement.scrollTop || document.body.scrollTop;
        w = document.documentElement.clientWidth;
        h = document.documentElement.clientHeight;
        return { left: l, top: t, width: w, height: h };
    }
    // 返回资源位置
    function getSubClient(p){
        var i, w, h;
        w = p.width();
        h = p.height();
        i = p.offset();

        return { left: i.left, top: i.top, width: w, height: h };
    }
    // 判断两个矩形是否相交,返回一个布尔值
    function intens(rec1, rec2){
        var lc1, lc2, tc1, tc2, w1, h1;
        lc1 = rec1.left + rec1.width / 2;
        lc2 = rec2.left + rec2.width / 2;
        tc1 = rec1.top + rec1.height / 2 ;
        tc2 = rec2.top + rec2.height / 2 ;
        w1 = (rec1.width + rec2.width) / 2 ;
        h1 = (rec1.height + rec2.height) / 2;

        return (Math.abs(tc1 - tc2) < h1) ;
    }

    // 比较某个子区域是否呈现在浏览器区域
    function jiance(arr, prec1, callback){

        var prec2;
        for(var i = arr.length - 1; i >= 0; i--){
            if(arr[i]){
                prec2 = getSubClient(arr[i]);
                if (intens(prec1, prec2)) {
                    callback(arr[i]);
                    // 加载资源后，删除监测content_imgOK
                    arr[i].find(".content_DivImg").addClass("content_imgOK")
                    delete arr[i];
                }
            }
        }
    }

    var contentArray = new Array();
    $(".content_Div").each(function(i){
        contentArray[i]= $(".content_Div").eq(i);
    });

    // 检测目标对象是否出现在客户区
    function autocheck(){
        var client = getClient();
        jiance(contentArray, client, function(obj){
            // 加载资源...
        })
    }
    autocheck();

    window.onscroll = function(){
        autocheck();
    };

})();

!function(){

    var num0;
    //帧动画
    function snum0(){
        //var self = this;
        if(num0 <= 30){
            document.img_2.src ="./img/animation_2/content_2-" +num0+ ".png";
            num0++;
        }else{
            num0 = 1;
            document.img_2.src ="./img/animation_2/content_2-" +num0+ ".png";
        }
    }
    var num1;
    //帧动画
    function snum1(){
        //var self = this;
        if(num1 <= 2){
            document.img_3.src ="./img/animation_3/" +num1+ ".png";
            document.img_5.src ="./img/animation_5/" +num1+ ".png";
            num1++;
        }else{
            num1 = 1;
            document.img_3.src ="./img/animation_3/" +num1+ ".png";
            document.img_5.src ="./img/animation_5/" +num1+ ".png";
        }
    }

    var num2;
    //帧动画
    function snum2(){
        //var self = this;
        if(num2 <= 6){
            document.img_4.src ="./img/animation_4/" +num2+ ".png";
            num2++;
        }else{
            num2 = 1;
            document.img_4.src ="./img/animation_4/" +num2+ ".png";
        }
    }

    var fps0 = 50;
    var now0;
    var then0 = Date.now();
    var interval0 = 7500/fps0;
    var delta0;
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    function tick0() {
        if(window.requestAnimationFrame) {
            requestAnimationFrame(tick0);
            now0 = Date.now();
            delta0 = now0 - then0;
            if (delta0 > interval0) {
                // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
                then0 = now0 - (delta0 % interval0);
                snum0();
            }
        } else {
            setTimeout(tick0, interval0);
            snum0();
        }
    }
    var fps1 = 50;
    var now1;
    var then1 = Date.now();
    var interval1 = 18000/fps1;
    var delta1;
    function tick1() {
        if(window.requestAnimationFrame) {
            requestAnimationFrame(tick1);
            now1 = Date.now();
            delta1 = now1 - then1;
            if (delta1 > interval1) {
                // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
                then1 = now1 - (delta1 % interval1);

                snum1();
                snum2();
            }
        } else {
            setTimeout(tick1, interval1);

            snum1();
            snum2();
        }
    }

    tick0();
    tick1();

}();

var download = function(){
    window.location.href="download.html";
};


/**
 * Created by Administrator on 2017/1/18 0018.
 */

/**
 * 当文档加载完成才会执行
 */
$(function () {
    $(window).on('resize', resize).trigger('resize');
    //根据屏幕宽度的变化而决定轮播图应该展示什么
    function resize() {
        var windowWidth = $(window).width();
        var isSmallWidth = windowWidth < 768;
        //trigger开始时被调用一下;
        $("#main_ad>.carousel-inner>.item").each(function(i,item) {
            //拿到的是dom对象,转换成jquery对象;才能使用jQuery方式操作;
            var $item = $(item);
            //data("abc")用于取该元素上面的属性值(data-abc);
            var imgSrc = isSmallWidth ? $item.data("image-xs") : $item.data("image-lg");
            $item.css("backgroundImage", 'url("' + imgSrc + '")');
            if (isSmallWidth) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            }else{
                $item.html("");
            }
        })
    }
})
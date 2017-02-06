/**
 * Created by Administrator on 2017/1/18 0018.
 */

/**
 * 当文档加载完成才会执行
 */
$(function(){


    $(window).on('resize',resize).trigger('resize');
    function resize(){
        var windowWidth = $(window).width();

        console.log("111");
        console.log(windowWidth);
        var isSmallWidth = windowWidth<768;
        //trigger开始时被调用一下;

        $("#main_ad>.carousel-inner>.item").each(function(i,item){
            console.log("222");
            //拿到的是dom对象,转换成jquery对象;
            var $item = $(item);
            console.log("333");
            console.log(isSmallWidth);
            console.log($item.data(isSmallWidth?"image-xs":"image-lg"));
            $item.css("backgroundImage",'url("'+$item.data(isSmallWidth?"image-xs":"image-lg")+'")');
            console.log("444");
        })
    }
})
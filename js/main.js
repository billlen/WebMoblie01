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

    //初始化tooltip插件;
    $('[data-toggle="tooltip"]').tooltip();

    //控制标签页的标签宽度;
    var $ulContainer = $(".nav-tabs");
    //获取所有子元素的宽度和
    var width = 30; //因为原本的ul上面有padding-left;
    //遍历子元素
    //console.log($ulContainer.children());
    $ulContainer.children().each(function(index,element){
        //console.log(element.clientWidth);
        //console.log($(element).width());
        width+= element.clientWidth;
    });

    //判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条;
    if(width>$(window).width()){
        //此时width等于所有li的总和;
        $ulContainer.css('width',width).parent().css("overflow-x","scroll");
    }

    var $newsTitle = $(".news-title");

    $('#news .nav-pills a').on("click",function(){
        //获取当前点击的元素;dom对象转换为jQuery对象;
        var $this = $(this);
        //获取对应的data-title值;
        var title = $this.data("title");
        //将title设置到相应的位置;
        $newsTitle.text(title);
    })

    // 获取界面上的轮播图容器
    var $carousels = $('.carousel');
    // 注册滑动事件

    //1. 先获取手指在轮播图元素上滑动方向;
    var startX;
    var endX;
    var offSet = 50;
    $carousels.on('touchstart',function(e){
        //获得开始时坐标
        startX =e.originalEvent.touches[0].clientX;
    });
        //获得结束时坐标
    $carousels.on('touchmove',function(e){
        //获得开始时坐标
        endX =e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend',function(e){
        var moveDistance = Math.abs(startX-endX);
        if(moveDistance>offSet){
            //谁触发的事件,这里指代的是谁;
            $this.carousel(startX>endX?'next':'prev');
        }

    });


    // 2. 根据获得到的方向选择上一张或下一张
    // -$('a').click();
    // -原生的.carousel('prev') .carousel('next')

});
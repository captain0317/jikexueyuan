$(document).ready(function() {

});
$(function() {
    var i = 0;
    var clone = $(".banner .img li").first().clone();
    $(".banner .img").append(clone); //把第一张图片添加到最后
    var size = $(".banner .img li").size();
    $(".banner .num").first().addClass("on");

    //鼠标划入圆点
    $(".banner .num li").hover(function() {
        var index = $(this).index();
        i = index;
        $(".banner .img").stop().animate({ left: -index * 690 }, 500);
        $(this).addClass("on").siblings().removeClass("on");
    });


    //自动轮播
    var t = setInterval(moveLeft, 2000);

    //对banner定时器的操作
    $(".banner").hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(moveLeft, 2000);
    });


    // 向左移动 
    $(".banner .btn_left").click(function() {
        moveLeft();
    });


    //向右移动
    $(".banner .btn_right").click(function() {
        moveRight();
    });

    function moveRight() {
        i--;
        if (i == -1) {
            $(".banner .img").css({ left: -(size - 1) * 690 });
            i = size - 2;
        }
        $(".banner .img").stop().animate({ left: -i * 690 }, 500);
        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
    }

    function moveLeft() {
        i++;
        if (i == size) {
            $(".banner .img").css({ left: 0 });
            i = 1;
        }
        $(".banner .img").stop().animate({ left: -i * 690 }, 500);
        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
    }

});
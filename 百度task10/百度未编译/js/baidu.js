$(document).ready(function() {
    //显示更多产品  法一
    $("#more_sub_btn").hover(function() {
        //$("body").css({ "overflow": "hidden" });
        $(this).children("ul").show();
        $("#moreProduct").css({ "border-left": "1px solid #ddd" })
        $(this).css({ background: "#d8d8d8", color: "#333" });
    }, function() {
        //$("body").css({ "overflow": "scroll" });
        $(this).children("ul").hide();
        $("#moreProduct").css({ "border-left": "0" })
        $(this).css({ background: "#38f", color: "#ffffff" });
    });

    //============end================================================

    //显示guidelist
    $("#myGuide").hover(function() {
        $(this).children("#guideList").show();
    }, function() {
        $(this).children("#guideList").hide();
    });
    //显示sublist
    $("#myGuide").on('click', function() {
        $(this).find("#subList").slideToggle();
        changeIcon($(this).children("a"));
    });
    //guidelist字体变色
    $("#guideList").hover(function() {
        $(this).children("a").css({ color: "#38f" });
        $(this).children("label").css({ color: "#38f" });
    }, function() {
        $(this).children("a").css({ color: "#333" });
        $(this).children("label").css({ color: "#333" });
    });

    //显示自定义
    $("#mydef").on('click', function() {
        $(this).find("#myown").slideToggle();
    });

    //改变背景色
    $("#mydef #myown #careless ul li").hover(function() {
        $(this).css({ background: "#38f" });
    }, function() {
        $(this).css({ background: "#ffffff" });
    });
    //修改文本
    $("#ArrowPosition").hover(function() {
            $(this).text("返回顶部");
        })
        //返回顶部
    $("#ArrowPosition").click(function() { $('html,body').animate({ scrollTop: '0px' }, 800); });
    //显示背景墙
    $("header .changeSkin span").click(function() {
        $("header .changeSkin .skin").slideToggle();
    });

});



//天气预报
$(document).ready(function() {
    var t;
    $(".weather").hover(function() {
        t = setTimeout(function() {
            $(".future_weather").show();
        }, 1000);
    }, function() {
        clearTimeout(t);
        $(".future_weather").hide();
    });
});
//天气预报end

//浮动搜索框
$(document).ready(function() {
    var showHeight = 236;
    $(window).scroll(function() {
        if ($(window).scrollTop() > showHeight) {
            $(".float_search_area").slideDown();
        } else if ($(window).scrollTop() < showHeight) {
            $(".float_search_area").slideUp(100);
        }
    })
});

//浮动搜索框end
//换肤
$(document).ready(function() {
    var cur_skin = parseInt(localStorage.skin);
    if (!cur_skin) {
        $("#background_img").removeClass().addClass("background_" + 1);
    } else {
        $("#background_img").removeClass().addClass("background_" + (cur_skin + 1));
    }
    $("#change_skin").click(function(e) {
        e.preventDefault();
        $('.skin>ul').slideDown();
        $(document).click(function() {
            $('.skin>ul').slideUp();
        });
        e.stopPropagation();
    });
    $(".skin>ul").click(function(e) {
        e.stopPropagation();
    });

    $(".skin>ul li").each(function(index) {
        $(this).click(function() {
            $("#background_img").removeClass().addClass("background_" + (index + 1));
            localStorage.skin = index;
        });
    });
});


//换肤end
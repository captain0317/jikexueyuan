$(document).ready(function () {
   $(".header nav ul li").hover(function () {
       $(this).each(function () {
            $(this).children("a").css({color:"#38b65b"});
            $(this).children("i").css({transform:"rotate(180deg)"});
            $(this).children("div").show();
            $(this).find(".slide-menu a").hover(function () {
                $(this).each(function () {
                    $(this).css({color:"#38b65b"});
                });
            },function () {
                $(this).each(function () {
                    $(this).css({color:"#555"});
                });
            });
       });
   },function () {
       $(this).each(function () {
           $(this).children("a").css({color:"#555"});
           $(this).children("i").css({transform:"rotate(360deg)"});
           $(this).children("div").hide();
       });
   });
   $("#user-login").hover(function () {
       $(this).children("div").show();
       $(this).find(".slide-menu a").hover(function () {
           $(this).each(function () {
               $(this).css({color:"#38b65b"});
           });
       },function () {
           $(this).each(function () {
               $(this).css({color:"#555"});
           });
       });
   },function () {
       $(this).children("div").hide();
   });
});
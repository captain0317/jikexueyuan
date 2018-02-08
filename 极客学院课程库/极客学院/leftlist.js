$(document).ready(function () {
   $(".slide_left").hover(function () {
        $(this).each(function () {
            $(this).children("a").css({color:"#38b65b"});
            $(this).css({"border-left":"1px solid #ddd","margin-left":"-1px","margin-right":"-2px","margin-top":"-1px","box-shadow":"1px 2px 4px rgba(0,0,0,.1)"});
            $(this).children(".subslide").show();
            // $(this).children(".subslide").slideToggle();
        });
    },function () {
       $(this).each(function () {
           $(this).children("a").css({color:"#555555"});
           $(this).css({"border-bottom":"1px solid #e4e4e4","border-left":"0","margin-left":"0px","margin-right":"0px","margin-top":"0px","box-shadow":"none"});
           $(this).children(".subslide").hide();
       });
   });
   $(".subslide dl dt a").hover(function () {
       $(this).css({color:"#38b65b"});
   },function () {
       $(this).css({color:"#555555"});
   });
   $(".subslide dl dd a").hover(function () {
       $(this).each(function () {
           $(this).css({color:"#38b65b"});
       });
   },function () {
       $(this).each(function () {
           $(this).css({color:"#555555"});
       });
   });
});
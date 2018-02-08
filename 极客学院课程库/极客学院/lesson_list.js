$(document).ready(function () {
   $(".lesson_list ul li").hover(function () {
       $(this).each(function () {
           $(this).find(".lesson_shoucang").show();
           $(this).find("a .lessonplay").css({opacity:"1"});
           $(this).find("a .lessonplay .player_icon").show();
           // $(this).find(".lesson_list .lesson_info").css({height:"175px"});
           // $(this).find(".lesson_list .lesson_info p").css({"height":"52px","opacity":"1"});
           // $(this).find(".lesson_list .lesson_info p").slideToggle();
       });
   },function () {
       $(this).each(function () {
           $(this).find("a .lessonplay").css({opacity:"0"});
           $(this).find(".lesson_shoucang").hide();
           $(this).find("a .lessonplay .player_icon").hide();
       });
   });
});
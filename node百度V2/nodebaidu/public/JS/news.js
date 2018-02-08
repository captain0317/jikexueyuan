$(document).ready(function() {
    refreshNews('图片');
    $('nav a').click(function(e) {
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    });
});


function refreshNews(type) {
    //动态添加新闻
    var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        url: '/news',
        type: 'get',
        datatype: 'json',
        data: { newstype: type },
        success: function(data) {
            //console.log(data);
            data.forEach(function(item, index, array) {
                var $list = $('<li></li>').addClass('news_list').prependTo($lists);
                var $newsImg = $('<div></div>').addClass('news_img').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('news_content').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newsTitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').addClass('news_time').html(item.newsTime).appendTo($p);
                var newsSrc = $('<span></span>').addClass('news_source').html(item.newsSrc).appendTo($p);
            });
        }
    });
}
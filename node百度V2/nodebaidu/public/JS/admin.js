//打开后台页面的时候发送请求，刷新新闻列表
$(document).ready(function() {
    var $newstable = $("#newstable tbody");
    refreshPages();




    //添加新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault();
        //输入判断各项是否为空
        if ($('#newstitle').val() === "" || $('#newstype').val() === "" || $('#newsimg').val() === "" || $('#newssrc').val() === "" || $('#newstime').val() === "") {

            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newstype').val() === "") {
                $('#newstype').parent().addClass('has-error');
            } else {
                $('#newstype').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
        } else {
            //提交添加
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newssrc: $('#newssrc').val(),
                newstime: $('#newstime').val()
            }
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    //console.log(data);
                    refreshPages();
                }
            });
        }
    });

    //====================删除新闻================================
    var deleteID = null;
    $newstable.on('click', '.btn-danger', function(e) { //事件委托？
        //console.log('click');
        $('#deleteModal').modal('show');
        deleteID = $(this).parent().prevAll().eq(5).html(); //???????????????????????
    });
    $('#deleteModal #confirm_del').click(function(e) {
        if (deleteID) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: { newsid: deleteID },
                success: function(data) {
                    //console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshPages();
                }
            });
        }
    });
    //====================删除新闻-end================================
    //====================更新新闻====================================
    var updateID = null;
    $newstable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateID = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url: '/admin/currnews',
            type: 'get',
            datatype: 'json',
            data: { newsid: updateID },
            success: function(data) {
                // console.log(data);
                $('#upnewstitle').val(data[0].newsTitle);
                $('#upnewstype').val(data[0].newsType);
                $('#upnewsimg').val(data[0].newsimg);
                $('#upnewssrc').val(data[0].newsSrc);
                var uptime = data[0].newsTime.split('T')[0];
                $('#upnewstime').val(uptime);
            }
        });
    });
    $('#updateModal #confirm_update').click(function(e) {
        $.ajax({
            url: '/admin/update',
            type: 'post',
            data: {
                newstitle: $('#upnewstitle').val(),
                newstype: $('#upnewstype').val(),
                newsimg: $('#upnewsimg').val(),
                newssrc: $('#upnewssrc').val(),
                newstime: $('#upnewstime').val(),
                id: updateID
            },
            success: function(data) {
                $('#updateModal').modal('hide');
                refreshPages();
            }
        });
    });
    //====================更新新闻-end====================================




    function refreshPages() {
        //1清空表格数据
        $newstable.empty();
        $.ajax({
            type: 'get',
            url: 'admin/getnews',
            datatype: 'json',
            success: function(data) {
                //console.log(data);
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newsType);
                    var $tdtitle = $('<td>').html(item.newsTitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newsSrc);
                    var $tdtime = $('<td>').html(item.newsTime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
                    $newstable.append($tRow);
                });
            }
        });
    }
});
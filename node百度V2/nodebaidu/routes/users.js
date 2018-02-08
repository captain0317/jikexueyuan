var express = require('express');
var router = express.Router();
var connection = require("../public/JS/database.js");

/* 后台管理===已无问题 */
router.get('/getnews', function(req, res, next) {
    //获取所有新闻列表
    connection.connect('SELECT * FROM `news`', function(err, rows) {
        res.json(rows);
    });
});
//确认更新
router.post('/update', function(req, res) {
    var newsid = req.body.id,
        newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newssrc = req.body.newssrc,
        newstime = req.body.newstime;
    connection.connect("UPDATE `news` SET `newsType`=?,`newsTitle`=?,`newsimg`=?,`newsSrc`=?,`newsTime`=? WHERE `id`=?", [newstype, newstitle, newsimg, newssrc, newstime, newsid], function(err, rows) {
        res.json(rows);
        console.log(rows.changedRows);
    });
});
//模态框取值
router.get('/currnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.connect('SELECT * FROM `news` WHERE id=?', [newsid], function(err, rows) {
        res.json(rows);
    });
});
//删除
router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.connect('DELETE FROM `news` WHERE `news`.`id`=?', [newsid], function(err, result) {
        res.json(result);
        console.log(result.affectedRows);
    });
});
//insert
router.post('/insert', function(req, res) {
    var newstitle = req.body.newstitle,
        newstype = req.body.newstype,
        newsimg = req.body.newsimg,
        newssrc = req.body.newssrc,
        newstime = req.body.newstime;
    connection.connect('INSERT INTO `news` (`newsTitle`,`newsType`,`newsimg`,`newsSrc`,`newsTime`) VALUES(?,?,?,?,?)', [newstitle, newstype, newsimg, newssrc, newstime], function(err, result) {
        if (!err) {
            res.json(result);
            console.log(result.insertId);
        }
    });
});
module.exports = router;
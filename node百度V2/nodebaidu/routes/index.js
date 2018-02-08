var express = require('express');
var router = express.Router();
var connection = require("../public/JS/database.js");

/* 在主页获取新闻的请求 */
router.get('/', function(req, res, next) {
    var newstype = req.query.newstype;
    connection.connect('SELECT * FROM `news` WHERE `newsType`=?', [newstype], function(err, rows, fields) {
        console.log(rows);
        res.json(rows);
    });
});

module.exports = router;
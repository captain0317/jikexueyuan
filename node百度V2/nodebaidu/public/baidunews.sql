-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-12-16 12:02:36
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newsType` char(200) NOT NULL,
  `newsTitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newsSrc` char(100) NOT NULL,
  `newsTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newsType`, `newsTitle`, `newsimg`, `newsSrc`, `newsTime`) VALUES
(3, '百家', '普京', 'img/pujing.JPEG', 'cnn', '2017-12-08 00:00:00'),
(5, '军事', '美国', 'img/trump.JPEG', '新华社', '2017-12-10 00:00:00'),
(12, '图片', 'hh', 'img/2.JPG', 'csd', '2017-12-09 00:00:00'),
(13, '图片', 'try', 'img/2.JPG', 'ds', '2017-12-10 00:00:00'),
(14, '精选', 'test', 'img/4.JPEG', 'souhu', '2017-12-15 00:00:00'),
(15, '精选', 'test2', 'img/3.JPEG', 'sina', '2017-12-14 00:00:00'),
(16, '本地', 'test04', 'img/4.JPEG', 'qq', '2017-12-15 00:00:00'),
(17, '本地', 'test05', 'img/3.JPEG', 'qq', '2017-12-13 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

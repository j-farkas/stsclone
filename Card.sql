-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 26, 2019 at 10:00 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stsclone`
--

-- --------------------------------------------------------

--
-- Table structure for table `Card`
--

CREATE TABLE `Card` (
  `Id` int(11) NOT NULL,
  `Cost` int(11) NOT NULL,
  `Type` text,
  `Effects` text NOT NULL,
  `Color` text NOT NULL,
  `Name` text,
  `Upgraded` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Card`
--

INSERT INTO `Card` (`Id`, `Cost`, `Type`, `Effects`, `Color`, `Name`, `Upgraded`) VALUES
(1, 1, 'Attack', '6 damage', 'Red', 'Strike', b'0'),
(2, 1, 'Skill', '6 block', 'Red', 'Defend', b'0'),
(4, 1, 'Attack', '9 damage', 'Red', 'Strike', b'1'),
(5, 1, 'Skill', '8 block', 'Red', 'Defend', b'1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Card`
--
ALTER TABLE `Card`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Card`
--
ALTER TABLE `Card`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

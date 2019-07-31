-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 31, 2019 at 06:09 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stsclone`
--

--
-- Dumping data for table `Card`
--

INSERT INTO `Card` (`Id`, `Name`, `Cost`, `Type`, `Effects`, `Color`, `Upgraded`, `CardText`, `Rarity`) VALUES
(1, 'Strike', 1, 'Attack', '6 damage', 'Red', 0, 'Deal 6 damage', 0),
(2, 'Defend', 1, 'Skill', '6 block', 'Red', 0, 'Block 6 damage', 0),
(4, 'Strike', 1, 'Attack', '9 damage', 'Red', 1, 'Deal 9 damage', 0),
(5, 'Defend', 1, 'Skill', '8 block', 'Red', 1, 'Block 8 damage', 0),
(6, 'Shrug it Off', 1, 'Skill', '8 block,1 draw', 'Red', 0, 'Gain 8 Block, Draw One Card', 1),
(7, 'Shrug it Off', 1, 'Skill', '11 block,1 draw', 'Red', 1, 'Gain 11 block, Draw one card', 2),
(8, 'Bash', 2, 'Attack', '8 damage,2 vuln', 'Red', 0, 'Deal 8 damage, apply 2 Vulnerable', 1),
(9, 'Bash', 2, 'Attack', '10 damage,3 vuln', 'Red', 1, 'Deal 10 damage, apply 3 vulnerable', 2),
(10, 'Bludgeon', 3, 'Attack', '32 damage', 'Red', 0, 'Deal 32 Damage', 1),
(11, 'Bludgeon', 3, 'Attack', '42 damage', 'Red', 1, 'Deal 42 damage', 2),
(12, 'Iron Wave', 1, 'Attack', '5 damage,5 block', 'Red', 0, 'Deal 5 damage, Gain 5 block', 1),
(13, 'Iron Wave', 1, 'Attack', '7 damage,7 block', 'Red', 1, 'Deal 7 damage, Gain 7 block', 2),
(14, 'Pommel Strike', 1, 'Attack', '9 damage,2 draw', 'Red', 0, 'Deal 9 Damage, Draw 2 Cards', 1),
(15, 'Pommel Strike', 1, 'Attack', '9 damage,3 draw', 'Red', 0, 'Deal 9 Damage, Draw 3 Cards', 2),
(16, 'Demon Form', 3, 'Power', '2 demonform', 'Red', 0, 'At the end of every turn gain 2 Strength', 1),
(17, 'Demon Form', 3, 'Power', '3 demonform', 'Red', 1, 'At the end of every turn gain 3 Strength', 2),
(18, 'Slice', 0, 'Attack', '5 damage', 'Red', 0, 'Deal 5 damage', 1),
(19, 'Slice', 0, 'Attack', '5 damage', 'Red', 1, 'Deal 8 damage', 1),
(20, 'Heavy Strike', 2, 'Attack', '5 damage,5 damage,5 damage', 'Red', 0, 'Deal 5 damage 3 times', 2),
(21, 'Heavy Strike', 2, 'Attack', '5 damage,5 damage,5 damage,5 damage,5 damage', 'Red', 1, 'Deal 5 damage 5 times', 3);

--
-- Dumping data for table `Enemy`
--

INSERT INTO `Enemy` (`Id`, `Attacks`, `RewardClass`, `HP`) VALUES
(1, 'random, 6 damage, 2 weak', 1, 12),
(2, 'set, 9 damage, 2 weak, 2 vuln', 2, 30),
(3, 'random, 30 damage, 5 frail, 5 weak, 5 vuln', 3, 50),
(4, 'random, 1 damage, 10 weak, 1 demonform', 4, 100),
(5, 'random, 8 damage, 12 damage', 1, 15),
(6, 'random, 6 damage, 12 damage, 18 damage', 2, 35);

--
-- Dumping data for table `__EFMigrationsHistory`
--

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`) VALUES
('20190729152457_AttackStrings', '2.2.6-servicing-10079'),
('20190729181650_cardtext', '2.2.6-servicing-10079'),
('20190729201558_rarity', '2.2.6-servicing-10079'),
('20190729225952_nobool', '2.2.6-servicing-10079');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

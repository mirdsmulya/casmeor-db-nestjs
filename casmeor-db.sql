-- MySQL dump 10.13  Distrib 8.0.15, for Linux (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `account` (
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('Dira Karima','dirak','DIR','Manager','sha1$ea65e86a$1$1affb41ae5cc8b5395005ca8eba32c65539c630e'),('Mirdan Syahid','mirdsm','MSA','Owner','sha1$70599958$1$2b5d60f0be7003b366c663223c2a5e8ce4e15542'),('Tata Janeta','tajan','TAJ','Staff','sha1$96035682$1$0277cd91b8fbf9b5c72ac17fc4a909e8f68b50d7'),('Winda Gita Aji','windagit','WIN','Staff','sha1$1da8bc4d$1$84e7f24c8836536d646a8bfabd46c2599a493928');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `menu` (
  `id` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES ('qfqwe','AyamGeprek','Ayam Geprek','Nasi, ayam bumbu bali, sambel, tahu dan tempe aaaaaaaaaaaaa',15000,0),('qwqde','AyamBali','Ayam Bumbu Bali','Nasi, ayam bumbu bali, sambel, tahu dan tempe',40000,0),('qwqwe','AyamTaliwang','Ayam Taliwang Bakar','Nasi, ayam taliwang',32000,0),('qwvwe','AyamKremes','Ayam Kremes Medan','Nasi, ayam bumbu bali, sambel, tahu dan tempe',17000,0);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `order` (
  `id` varchar(255) NOT NULL,
  `cashierIdentity` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `currentDate` varchar(255) NOT NULL,
  `paymentStatus` varchar(255) NOT NULL,
  `totalAmount` int(11) NOT NULL,
  `orderNumber` int(11) NOT NULL,
  `tableNumber` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES ('1592657042270','Winda','Andi','20/6/2020','PAID',87000,1,3),('1593349788356','Mirdan','Kiko','28/6/2020','PAID',15000,2,3),('1593350110643','Mirdan','Cindy','28/6/2020','PAID',40000,4,7),('1593350133027','Mirdan','Cho Taek','28/6/2020','PAID',72000,5,6),('1593350251392','Mirdan','Kay','28/6/2020','PAID',55000,6,5),('1593350276582','Mirdan','Winta','28/6/2020','PAID',70000,7,3),('1593350343786','Mirdan','Winta','28/6/2020','PAID',87000,7,5),('1593350368872','Mirdan','Wenas','28/6/2020','PAID',15000,8,6),('1593350675760','Mirdan','Darso','28/6/2020','PAID',40000,12,8),('1593351821620','Mirdan','Andi','28/6/2020','PAID',49000,9,9),('1593352332644','Mirdan','Chan','28/6/2020','PAID',64000,10,5),('1593352394591','Mirdan','Kon','28/6/2020','PAID',70000,13,5),('1593352506544','Mirdan','Hyung','28/6/2020','PAID',45000,11,5),('1593353620476','Mirdan','Yoman','28/6/2020','PAID',89000,12,5);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_list`
--

DROP TABLE IF EXISTS `order_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `order_list` (
  `orderId` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `menuId` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `FK_b06d4c15c81dbcb4b30b920b2a6` (`orderId`),
  CONSTRAINT `FK_b06d4c15c81dbcb4b30b920b2a6` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=326 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_list`
--

LOCK TABLES `order_list` WRITE;
/*!40000 ALTER TABLE `order_list` DISABLE KEYS */;
INSERT INTO `order_list` VALUES ('1593349788356',1,'qfqwe',276),('1593350110643',1,'qwqde',280),('1593350133027',1,'qwqwe',281),('1593350133027',1,'qwqde',282),('1593350251392',1,'qwqde',283),('1593350251392',1,'qfqwe',284),('1593350343786',1,'qfqwe',289),('1593350343786',1,'qwqwe',290),('1593350343786',1,'qwqde',291),('1593350368872',1,'qfqwe',292),('1593350675760',1,'qwqde',296),('1593352332644',2,'qwvwe',309),('1593352332644',2,'qfqwe',310),('1593352394591',1,'qwqde',315),('1593352394591',2,'qfqwe',316),('1593352506544',3,'qfqwe',317),('1593353620476',2,'qwvwe',323),('1593353620476',1,'qwqde',324),('1593353620476',1,'qfqwe',325);
/*!40000 ALTER TABLE `order_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('Timber','Saw',25,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-29  6:50:12

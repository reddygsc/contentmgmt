-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: data_db
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contact_details`
--

DROP TABLE IF EXISTS `contact_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_details` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `webpage` varchar(2048) NOT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_details`
--

LOCK TABLES `contact_details` WRITE;
/*!40000 ALTER TABLE `contact_details` DISABLE KEYS */;
INSERT INTO `contact_details` VALUES (1,'http://wwww.test.com','0987654321'),(2,'http://wwww.test.com','0987654321'),(3,'http://wwww.test.com','1234567890'),(4,'http://wwww.test.com','0987654321'),(5,'http://wwww.test.com','1234567890'),(6,'http://wwww.test.com','0987654321'),(7,'http://wwww.test.com','1234567890'),(8,'http://wwww.test.com','0987654321'),(9,'http://wwww.test.com','1234567890'),(10,'http://wwww.test12345.com','09876543431'),(11,'http://wwww.test12345.com','1234567890'),(12,'http://wwww.test12345.com','09876543431'),(13,'http://wwww.test12345.com','1234567890'),(14,'http://wwww.test12345.com','09876543431'),(15,'http://wwww.test12345.com','1234567890'),(16,'http://wwww.test12345.com','09876543431'),(17,'http://wwww.test12345.com','1234567890'),(18,'http://wwww.test12345.com','09876543431'),(19,'http://wwww.test12345.com','1234567890'),(20,'http://wwww.test12345.com','09876543431'),(21,'http://wwww.test12345.com','1234567890'),(22,'http://wwww.test12345.com','09876543431'),(23,'http://wwww.test12345.com','1234567890'),(24,'http://wwww.test12345.com','09876543431'),(25,'http://wwww.test12345.com','1234567890'),(26,'http://wwww.test12345.com','09876543431'),(27,'http://wwww.test12345.com','1234567890'),(28,'http://wwww.test12345.com','09876543431'),(29,'http://wwww.test12345.com','1234567890'),(30,'http://wwww.test12345.com','09876543431'),(31,'http://wwww.test12345.com','1234567890'),(32,'http://wwww.test12345.com','09876543431'),(33,'http://wwww.test12345.com','1234567890'),(34,'http://wwww.test12345.com','09876543431'),(35,'http://wwww.test12345.com','1234567890'),(36,'http://wwww.test12345.com','09876543431'),(37,'http://wwww.test12345.com','1234567890'),(38,'http://wwww.test12345.com','09876543431'),(39,'http://wwww.test12345.com','1234567890'),(40,'http://wwww.test12345.com','09876543431'),(41,'http://wwww.test12345.com','1234567890'),(42,'http://wwww.test12345.com','09876543431'),(43,'http://wwww.test12345.com','1234567890'),(44,'973 699 4697,',NULL),(45,'http://www.zetaoptwebsite.com/contacts/','973 699 4697,'),(46,'http://www.zetaoptwebsite.com/contacts/','973 699 4697,973-699-4697'),(47,'http://www.zetaoptwebsite.com/contacts/','973 699 4697'),(48,'http://www.zetaoptwebsite.com/contacts/','973-699-4697');
/*!40000 ALTER TABLE `contact_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-13 23:38:24

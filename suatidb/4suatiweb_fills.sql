CREATE DATABASE  IF NOT EXISTS `suatiweb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `suatiweb`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: suatiweb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fills`
--

DROP TABLE IF EXISTS `fills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `timeBegin` datetime DEFAULT NULL,
  `timeEnd` datetime DEFAULT NULL,
  `microId` int NOT NULL,
  `macroId` int NOT NULL,
  `IsAtCPH` bit(1) NOT NULL,
  `complementoId` varchar(45) DEFAULT NULL,
  `duration` time NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  KEY `macroId_idx` (`macroId`),
  KEY `microId_idx` (`microId`),
  CONSTRAINT `fillsUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `macroId` FOREIGN KEY (`macroId`) REFERENCES `macros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `microId` FOREIGN KEY (`microId`) REFERENCES `micros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fills`
--

LOCK TABLES `fills` WRITE;
/*!40000 ALTER TABLE `fills` DISABLE KEYS */;
INSERT INTO `fills` VALUES (1,8,NULL,NULL,NULL,1,1,_binary '',NULL,'00:11:12'),(2,8,NULL,NULL,NULL,1,1,_binary '',NULL,'00:11:12'),(3,8,NULL,NULL,NULL,1,1,_binary '',NULL,'02:11:12');
/*!40000 ALTER TABLE `fills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-07 21:13:55

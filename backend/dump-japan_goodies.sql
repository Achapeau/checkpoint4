-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: japan_goodies
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `basket`
--

DROP TABLE IF EXISTS `basket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `item_id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `total_price` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `basket_FK_2` (`user_id`),
  KEY `basket_FK` (`item_id`),
  CONSTRAINT `basket_FK` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `basket_FK_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basket`
--

LOCK TABLES `basket` WRITE;
/*!40000 ALTER TABLE `basket` DISABLE KEYS */;
/*!40000 ALTER TABLE `basket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `price` float NOT NULL DEFAULT '0',
  `img_path` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'Link_escalade','Statue de Link avec sa tenue d\'escalade',20,300,'link-breath-of-the-wild.jpg'),(2,'takoyakis surgelés','beignets de poulpe en forme de boule, street food',2000,3.5,''),(3,'dangos surgelés','confiserie à base de farine de riz, street food',20000,3.5,''),(4,'Masque de renard','Masque en plastique pour les fêtes, street food',20000,9.5,''),(5,'geita','Sandales japonaise',200,50,''),(6,'yukata','kimono léger pour l\'été',100,50,''),(7,'Zelda_exploration','Statuette de zelda explorant les sous-sol du chateau d\'Hyrule',10,500,''),(8,'Momichi Manju','Confiserie en provenance de Miyajima',1500,15,'Spoiler'),(9,'Magnet_tori','Magnet en forme de Tori souvenir',1500,15,''),(10,'Jinbeï','Kimono court d\'été pour homme',150,35,''),(11,'Obi','Ceinture large pour kimono',150,35,''),(12,'Maneki Neko','Porte bonheur qu\'ontrouve généralement à l\'entrée des boutiques, censé attiré la chance dans les ventes',150,5,''),(13,'Okonomiyaki','Vendu par 4, galettes surgelées de viandes et légumes à faire cuire sur une plancha en inox. Se traduit littéralement par Ce que vous aimez grillé, street food',1500,5,''),(14,'Omamori santé','Porte bonheur pour la santé',1500,5,''),(15,'Omamori études','Porte bonheur pour les études',1500,5,''),(16,'Omamori grossesse','Porte bonheur pour la grossesse',1500,5,''),(17,'Daruma','Porte bonheur ',1500,5,''),(18,'kokeshi','Petite poupée en bois ',1500,45,''),(19,'Umeshu Shiratama','La prune comme vous ne l’avez jamais vu ! Découvrez cette liqueur élaborée à partir de Shoshu et de prunes et soulignée par une touche de whisky.',1500,25,''),(20,'boîte bento','Boîte pour empaqueter les repas à emporter, que ça soit pour le travail, école, picnic...',1500,25,'');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nick_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `roles_for_the_future` tinyint NOT NULL DEFAULT '0',
  `email` text COLLATE utf8mb4_general_ci,
  `adress` text COLLATE utf8mb4_general_ci,
  `city` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `hashed_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='table des utilisateurs inscrit';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,'Samuel','Cardonnel','SamSagace',0,'test@mail.fr',NULL,NULL,'$argon2id$v=19$m=65536,t=5,p=1$c4D7jD2O2vSgiPsAtesy6g$yZ6T9Ac2ki2O7k4sldLJk6bnofLQ2x03ZPRH6/TXL/M'),(6,'Loris','Chastanet','RobbStark',0,'test1@mail.fr',NULL,NULL,'$argon2id$v=19$m=65536,t=5,p=1$HPxOyM73MEijwq912nE7Aw$rUF0usf/70nOLN1uwicqU3BTyCYUmId24JdVZhZj05s'),(11,'Adrien','CHAPEAU','LaFlemme',0,'ad.chap.13.17@gmail.com',NULL,NULL,'$argon2id$v=19$m=65536,t=5,p=1$UsaYZgZ3JenqDXdJfoMsLA$rCKJHISEJlLqb8Q/yuTJEXEUXs7h7BxUv7UoG3qpvmE');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'japan_goodies'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-02  7:52:34

DROP DATABASE IF EXISTS NFT;
CREATE DATABASE NFT;
USE NFT;
CREATE TABLE user (
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(40) UNIQUE,
  email varchar(40),
  password varchar(64),
  age int ,
  phonenumber int,
  profile_picture varchar(255),
  -- description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);
CREATE TABLE picture (
  ID int NOT NULL AUTO_INCREMENT,
  upload varchar(255),
  title varchar(20),
  description varchar(50),
  -- price_sell DECIMAL(10,2) NOT NULL ,
  price_bid DECIMAL(10,2) NOT NULL,
  -- Domain_name varchar(30),
  -- soponsoring boolean,
  data_end DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);
CREATE EVENT newEvent
ON SCHEDULE EVERY 1 MINUTE
DO
DELETE FROM picture WHERE data_end <= DATE_SUB(NOW(), INTERVAL 1 MINUTE) 
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/
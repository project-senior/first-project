DROP DATABASE IF EXISTS NFT;

CREATE DATABASE NFT;

USE NFT;

CREATE TABLE user (
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(40) UNIQUE,
  email varchar(40),
  password varchar(64),
  salt varchar(255),
  age datetime ,
  phonenumber varchar(12),
  profile_picture varchar(255),

  -- description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE picture (
  ID int NOT NULL AUTO_INCREMENT,
  upload varchar(255),
  title varchar(20),
  description varchar(50),
  price_sell DECIMAL(10,2) NOT NULL ,
  price_bid DECIMAL(10,2) NOT NULL,
  Domain_name varchar(30),
  soponsoring boolean,
  PRIMARY KEY (ID)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/
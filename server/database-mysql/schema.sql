DROP DATABASE IF EXISTS NFT;

CREATE DATABASE NFT;

USE NFT;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
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
  id int NOT NULL AUTO_INCREMENT,
  upload varchar(255),
  title varchar(20),
  description varchar(50),
  price_sell NOT NULL ,
  price_bid NOT NULL,
  Domain_name varchar(30),
  soponsoring NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE user_likes(
  id int NOT NULL AUTO_INCREMENT,
  user_id ,
  picture_id ,
  PRIMARY KEY (ID)
)

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/
-- Created the DB "burgers_db" 
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "products" 
CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(80) NOT NULL,
  devoured BOOLEAN NULL,
  PRIMARY KEY(id)
);

-- SELECT * FROM burgers;

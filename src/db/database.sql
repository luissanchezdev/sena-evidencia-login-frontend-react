CREATE DATABASE login_react;
USE login_react;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  name VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);

INSERT INTO usuarios(username, name, password) VALUES 
  ('luissdev', 'Luis Sanchez', '1234'),
  ('anderson', 'Anderson Ramirez', '1234');
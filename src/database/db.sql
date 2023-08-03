CREATE DATABASE Quiz;

USE Quiz;

CREATE TABLE user(
    id VARCHAR(30) NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(225) NOT NULL
);

CREATE TABLE quiz(
    id VARCHAR(30) NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    iduser VARCHAR(30) NOT NULL,
    FOREIGN KEY(iduser) REFERENCES user (id)
);

CREATE TABLE question(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    question TEXT NOT NULL,
    idquiz VARCHAR(30) NOT NULL,
    FOREIGN KEY(idquiz) REFERENCES quiz (id)
);

CREATE TABLE option(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    option VARCHAR(1) NOT NULL,
    answer VARCHAR(100) NOT NULL,
    qualification  int NOT NULL,
    idquestion int NOT NULL,
    FOREIGN KEY(idquestion) REFERENCES question (id)
);

CREATE TABLE answer(
    id VARCHAR(30) NOT NULL PRIMARY KEY,
    option VARCHAR(1) NOT NULL,
    answer VARCHAR(100) NOT NULL,
    qualification int NOT NULL,  
    idquiz VARCHAR(30) NOT NULL,
    idquestion int NOT NULL,
    iduser VARCHAR(30) NOT NULL,
    FOREIGN KEY(idquiz) REFERENCES quiz (id),
    FOREIGN KEY(idquestion) REFERENCES question (id),
    FOREIGN KEY(iduser) REFERENCES user (id)
);

CREATE TABLE qualification(
    id VARCHAR(30) NOT NULL PRIMARY KEY,
    questions int NOT NULL,
    answers int NOT NULL,
    qualification FLOAT NOT NULL,
    idquiz VARCHAR(30) NOT NULL,
    iduser VARCHAR(30) NOT NULL,
    FOREIGN KEY (idquiz) REFERENCES quiz (id),
    FOREIGN KEY (iduser) REFERENCES user (id)
);
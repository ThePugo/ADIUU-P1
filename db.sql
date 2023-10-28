CREATE TABLE CPU (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partType VARCHAR(10),
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    url VARCHAR(255),
    brand VARCHAR(255),
    socket VARCHAR(255),
    speed DECIMAL(10, 2),
    coreCount INT,
    threadCount INT,
    power INT
);

CREATE TABLE GPU (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partType VARCHAR(10),
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    url VARCHAR(255),
    brand VARCHAR(255),
    VRAM INT,
    resolution VARCHAR(255),
    power INT
);

CREATE TABLE COOLER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partType VARCHAR(10),
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    url VARCHAR(255),
    type VARCHAR(255)
);

CREATE TABLE TOWER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partType VARCHAR(10),
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    url VARCHAR(255),
    size VARCHAR(255)
);

CREATE TABLE STORAGE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partType VARCHAR(10),
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    url VARCHAR(255),
    type VARCHAR(255),
    space INT
);

CREATE TABLE PSU (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partType VARCHAR(10),
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    url VARCHAR(255),
    power INT,
    size VARCHAR(255)
);

CREATE TABLE MOTHERBOARD (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partType VARCHAR(15),
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    url VARCHAR(255),
    brand VARCHAR(255),
    socket VARCHAR(255),
    size VARCHAR(255)
);

CREATE TABLE MEMORY (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partType VARCHAR(15),
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    url VARCHAR(255),
    type VARCHAR(255),
    size INT
);

LOAD DATA INFILE 'C:/Users/pugo/Downloads/cpu.csv'
    INTO TABLE CPU
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (partType, name, image, url, brand, socket, speed, coreCount, threadCount, power);

LOAD DATA INFILE 'C:/Users/pugo/Downloads/gpu.csv'
    INTO TABLE GPU
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (partType, name, image, url, brand, VRAM, resolution, power);

LOAD DATA INFILE 'C:/Users/pugo/Downloads/cooler.csv'
    INTO TABLE COOLER
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (partType, name, image, url, type);

LOAD DATA INFILE 'C:/Users/pugo/Downloads/case.csv'
    INTO TABLE TOWER
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (partType, name, image, url, size);

LOAD DATA INFILE 'C:/Users/pugo/Downloads/storage.csv'
    INTO TABLE STORAGE
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (partType, name, image, url, type, space);

LOAD DATA INFILE 'C:/Users/pugo/Downloads/psu.csv'
    INTO TABLE PSU
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (partType, name, image, url, power, size);

LOAD DATA INFILE 'C:/Users/pugo/Downloads/motherboard.csv'
    INTO TABLE MOTHERBOARD
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (partType, name, image, url, brand, socket, size);

LOAD DATA INFILE 'C:/Users/pugo/Downloads/memory.csv'
    INTO TABLE MEMORY
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (partType, name, image, url, type, size);

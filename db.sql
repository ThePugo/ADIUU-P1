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

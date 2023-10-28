CREATE TABLE CPU (
    id INT AUTO_INCREMENT PRIMARY KEY,
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
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    url VARCHAR(255),
    brand VARCHAR(255),
    VRAM INT,
    resolution VARCHAR(255),
    power INT
);

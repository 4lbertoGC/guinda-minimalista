
-- Crear la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS cecyt12;

-- Usar la base de datos
USE cecyt12;

-- Crear la tabla de registros
CREATE TABLE IF NOT EXISTS registros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    boleta VARCHAR(10) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    promedio VARCHAR(4) NOT NULL,
    especialidad VARCHAR(20) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear un índice en boleta para búsquedas más rápidas
CREATE INDEX idx_boleta ON registros(boleta);

-- Crear un índice en especialidad para filtrar por especialidad
CREATE INDEX idx_especialidad ON registros(especialidad);

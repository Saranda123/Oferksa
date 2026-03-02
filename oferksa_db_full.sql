
CREATE TABLE tipos_inmueble (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

INSERT INTO tipos_inmueble (nombre) VALUES
('Apartamento'),
('Casa');

CREATE TABLE estados (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

INSERT INTO estados (nombre) VALUES
('Disponible'),
('Separado');

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    contraseña TEXT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE inmuebles (
    id SERIAL PRIMARY KEY,
    tipo_id INT REFERENCES tipos_inmueble(id),
    estado_id INT REFERENCES estados(id),
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio NUMERIC(12,2),
    metros_cuadrados INT,
    habitaciones INT,
    banos INT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contactos (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    telefono TEXT NOT NULL,
    inmueble_id INT REFERENCES inmuebles(id),
    mensaje TEXT,
    fecha_contacto TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE imagenes_inmueble (
    id SERIAL PRIMARY KEY,
    inmueble_id INT REFERENCES inmuebles(id),
    url TEXT NOT NULL,
    principal BOOLEAN
);

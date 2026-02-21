# Oferksa

Proyecto full stack en desarrollo para la gestión y visualización de inmuebles.
Actualmente se está construyendo aplicando buenas prácticas de arquitectura backend, normalización de base de datos y consumo de APIs con React.

## Tecnologías

Frontend
    React (Vite)
    JavaScript
    SCSS
Backend
    Node.js
    Express
Base de Datos
    PostgreSQL

## Base de Datos

Modelo relacional normalizado.
Tablas actuales:
    usuarios
    inmuebles
    tipos_inmueble
    estados_inmueble
Relaciones implementadas:
    inmuebles.usuario_id → usuarios.usuario_id
    inmuebles.tipo_id → tipos_inmueble.tipo_id
    inmuebles.estado_id → estados_inmueble.estado_id
Se están utilizando claves foráneas para mantener la integridad de los datos.

## Estado Actual

    Migración parcial del proyecto a React
    Página Home funcional
    Página Nosotros componentizada
    JOIN entre tablas funcionando correctamente
    Integridad referencial validada

## Próximos Pasos

    Crear tabla imagenes_inmueble
    Crear tabla solicitudes_contacto
    Crear endpoint GET /api/inmuebles
    Conectar React con backend

## Ejecutar el Proyecto

Backend
    npm install
    npm run dev
Frontend
    cd oferksa-react
    npm install
    npm run dev

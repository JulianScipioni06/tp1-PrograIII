# Cultura Matera - Front-end (TP Nº3)

> **Links del Proyecto**
> * **Página en Vivo (GitHub Pages):** https://julianscipioni06.github.io/tp1-PrograIII/
> * **Repositorio del Back-end (API):** https://github.com/JulianScipioni06/tp3-prograIII-backend
> * **API Desplegada (Render):** https://tp3-prograiii-backend.onrender.com

## Integrantes del Grupo 
* **Grupo N°:** 14
* **Integrantes:** 
    - Pozo Bautista
    - Ripa Julian
    - Scipioni Julian
    - Strizzi Guido
    - Wener Joaquin

## Descripción del Proyecto
Este repositorio contiene la interfaz de usuario de "Cultura Matera". El proyecto fue migrado desde una estructura estática (TP1) a una dinámica, donde todos los datos de productos, equipo y usuarios son consumidos mediante peticiones asíncronas a una API REST desarrollada en Node.js y desplegada en Render.

## Metodología de Git y GitHub 
Al igual que en el back-end, utilizamos la metodología de **ramas por alumno**. Cada integrante trabajó sus funcionalidades en ramas independientes para luego integrarlas a `main` mediante Pull Requests, asegurando la integridad del código y el historial de aportes de todo el equipo.

## Distribución de Tareas y Archivos 

**División de Tareas**
* **Pozo Bautista, Ripa Julian y Strizzi Guido:** Desarrollo completo de la interfaz visual (HTML/CSS), maquetado de componentes, diseño responsivo y lógica de renderizado de tarjetas.
* **Julián Scipioni:** Implementación de funciones asíncronas (fetch) para la conexión con el servidor de Render y manejo de persistencia de sesión con `sessionStorage`.
* **Joaquin Wener:** Apoyo en la lógica de validación de formularios y filtros de búsqueda en el front-end.

**Estructura de Carpetas:**
* `/pages`: Archivos HTML de las distintas secciones (Servicios, Equipo, Contacto, Login).
* `/css`: Estilos modulares organizados por componentes (nav.css, cards.css, footer.css, etc.).
* `/js`: Lógica de consumo de API y manipulación del DOM (servicios.js, equipo.js, login.js).
* `/assets`: Recursos estáticos como imágenes de productos, logos e iconos.

## Funciones Principales (Front-end)
Se reemplazaron los arrays locales por promesas y consumo de endpoints externos utilizando `async/await`.

* `mostrarSpinner()` / `ocultarSpinner()`: Gestionan la experiencia de usuario durante el tiempo de respuesta del servidor en Render.
* `getServicios()` / `getEquipo()`: Realizan peticiones `GET` a la API para obtener los datos actualizados de los archivos JSON del servidor.
* `mostrarProductos()` / `mostrarMiembros()`: Reciben la data del servidor y generan dinámicamente las tarjetas en el DOM utilizando `document.createElement`.
* `filtrar()`: Lógica que permite al usuario buscar productos por nombre o categoría en tiempo real sobre los datos traídos de la API.
* `login()`: Función que envía una petición `POST` al servidor con las credenciales y gestiona la redirección al perfil del usuario.
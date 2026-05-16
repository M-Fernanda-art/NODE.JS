// QUE ES NODE JS

// Es un entorno que permite ejecutar JavaScript fuera del navegador, principalmente en servidores.
// Se puede usar JS para: Crear servidores web, manejar bases de datos, procesar formularios, crear APIs, subir archivos,hacer aplicaciones backend
// Casos en los que se puede usar: login, registro, tiendas online, blogs, chats, APIs, sistemas escolares
// Ventajas: Usa JS completo, backend y forntend, rapido, muy usado

const express = require("express");
const app = express();

app.use(express.json());

app.post("/saludo", (req, res) => {
    const nombre = req.body.nombre;

    res.json({
        mensaje: `Hola, ${nombre}. Bienvenido a Node.js`
});
});

app.listen(3000, () => {
    console.log("servidor corriendo en http://localhost:3000");
});


// INGRESAR

function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            clave: clave
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultado").textContent = data.mensaje;
    })
    .catch(error => {
        document.getElementById("resultado").textContent = "Error en la conexión";
        console.log(error);
    });
}


// NPM

// Node Package Manager. Es el administrador de paquetes de Node.js y se usa para instalar librerías, gestionar dependencias, crear proyectos, ejecutar Scripts y actualizar paquetes.
// Ejemplos: instalar express: npm install express
// Crear proyecto: npm init -y
// Instalar Bootstrap: npm install bootstrap
// Ejecutar proyecto: npm start

// npm descarga archivos, crea node_modules, actualiza package.json
// package.json = guarda información importante del proyecto
// node_modules = guarda librerías instaladas


// EXPRESS 

// Es una librería que facilita crear servidores y aplicaciones web
// Ayuda a construir backend más rápido y con menos código
// Sirve para crear servidores web, APIs, formularios, login, manejo rutas, bases de datos, sitios dinámicos
// casos comunes: registro de usuarios, login, tiendas ononline, blogs, chats, APIs REST

// Cómo usar express
// 1. Crear proyecto: npm init -y, esto genera un package.json
// 2. Instalar Express: npm install express
// 3. Crear archivo: server.js
// 4. Código básico: 

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola, tu servidor funciona con Express");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

// 5. Ejecutar: node server.js
// Resultado: http://localhost:3000


// PACKAGE.JSON

// Guarda información importante del proyecto, nombre, versión, dependencias instaladas, scripts, autor, configuración general

// {
//   "name": "mi-proyecto",
//   "version": "1.0.0",
//   "description": "Proyecto con Node.js",
//   "main": "server.js",
//   "scripts": {
//     "start": "node server.js"
//   },
//   "dependencies": {
//     "express": "^4.18.2"
//   }
// }
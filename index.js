// QUE ES NODE JS

// const { response } = require("express");

// Es un entorno que permite ejecutar JavaScript fuera del navegador, principalmente en servidores.
// Se puede usar JS para: Crear servidores web, manejar bases de datos, procesar formularios, crear APIs, subir archivos,hacer aplicaciones backend
// Casos en los que se puede usar: login, registro, tiendas online, blogs, chats, APIs, sistemas escolares
// Ventajas: Usa JS completo, backend y forntend, rapido, muy usado



// REGISTRAR

const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value
    };

    fetch("/registro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        mensaje.textContent = data.mensaje;
    })
    .catch(error => {
        mensaje.textContent = "Error";
        console.log(error);
    });

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
        document.getElementById("resultado2").textContent = data.mensaje;
    })
    .catch(error => {
        document.getElementById("resultado2").textContent = "Error en la conexión";
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

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hola, tu servidor funciona con Express");
// });

// app.listen(3000, () => {
//     console.log("Servidor corriendo en http://localhost:3000");
// });

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


// EJEMPLO 2 - LISTA DE PRODUCTOS

const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {

    fetch("/productos")
    .then(response => response.json())
    .then(data => {

        lista.innerHTML = "";

        data.forEach(producto => {

            const li = document.createElement("li");

            li.textContent =
                `${producto.nombre} - $${producto.precio}`;

                lista.appendChild(li);
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });
});


// EJEMPLO 3 - COMENTARIOS

const botonComentarios = document.getElementById("enviar");
const listaComentarios = document.getElementById("lista2");

function cargarComentarios() {

    fetch("/comentarios")
    .then(response => response.json())
    .then(data => {

        listaComentarios.innerHTML = "";

        data.forEach(comentario => {
            const li = document.createElement("li");
            li.textContent = comentario;
            listaComentarios.appendChild(li);
        });
    });
}

botonComentarios.addEventListener("click", () => {
    const comentario = document.getElementById("comentario").value;

    fetch("/comentarios", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            comentario: comentario
        })
    })
    .then(response => response.json())
    .then(data => {

        cargarComentarios();

        document.getElementById("comentario").value = "";
    });
});

cargarComentarios();


// EJEMPLO 4 - CARRITO DE COMPRAS

const listaProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("carrito");

function cargarProductos() {

    fetch("/productos")
    .then(response => response.json())
    .then(data => {

        listaProductos.innerHTML = "";

        data.forEach(producto => {
            
            const li = document.createElement("li");

            li.textContent = producto.nombre;

            const boton = document.createElement("button");

            boton.textContent = "Agregar";

            boton.addEventListener("click", () => {
                agregarAlCarrito(producto);
            });

            li.appendChild(boton);

            listaProductos.appendChild(li);
        });
    });
}

function agregarAlCarrito(producto) {

    fetch("/carrito", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(producto)
    })
    .then(response => response.json())
    .then(data => {

        cargarCarrito();
    });
}

function cargarCarrito() {

    fetch("/carrito")
    .then(response => response.json())
    .then(data => {

        listaCarrito.innerHTML = "";

        data.forEach(producto => {

            const li = document.createElement("li");

            li.textContent = producto.nombre;

            listaCarrito.appendChild(li);
        });
    });
}

cargarProductos();
cargarCarrito();
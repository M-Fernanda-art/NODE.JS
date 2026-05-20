// EJEMPLO 2

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname));

app.get("/productos", (req, res) => {

    const productos = [
        { nombre: "Laptop", precio: 2500 },
        { nombre: "Mouse", precio: 80 },
        { nombre: "Teclado", precio: 150 }
    ];

    res.json(productos);
});

app.listen(3000, () => {
    console.log("Servidor activo en http://localhost:3000");
});

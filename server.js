// REGISTRAR

const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/registro", (req, res) => {
    const { nombre, correo } = req.body;

    res.json({
        mensaje: `Bienvenido, ${nombre}, tu correo es ${correo}`
    });
});

app.listen(3000, () => {
    console.log("servidor activo en http://localhost:3000");
});



// EJEMPLO 2 - LISTA DE PRODUCTOS

app.use(express.static(__dirname));

app.get("/productos", (req, res) => {

    const productos = [
        { nombre: "Laptop", precio: 2500 },
        { nombre: "Mouse", precio: 80 },
        { nombre: "Teclado", precio: 150 }
    ];

    res.json(productos);
});




// EJEMPLO 3 - COMENTARIOS

app.use(express.json());
app.use(express.static(__dirname));

const comentarios = [];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/comentarios", (req, res) => {
    res.json(comentarios);
});

app.post("/comentarios", (req, res) => {

    const nuevoComentario = req.body.comentario;

    comentarios.push(nuevoComentario);

    res.json({
        mensaje: "Comentario agregado"
    });
});





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




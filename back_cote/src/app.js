const express = require('express');
const cors = require('cors');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo/apidb", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    user: "tp_api",
    pass: "apipass"
}).then(() => {
    console.log('Connexion à la base de données avec succès');
}).catch(err => {
    console.log('Erreur de connexion à la base de données');
    process.exit();
});

server.use(express.urlencoded());
server.use(express.json());
server.use(cors());

const userRoute = require("./api/routes/userRoute");
userRoute(server);

server.listen(port, hostname);


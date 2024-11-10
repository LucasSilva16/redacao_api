const express = require('express');
const userRoutes = require('./routes/user_routes');
const conn = require('./data/connection');
const app = express();

app.use(express.json()); // Coloque isso antes das rotas

conn.authenticate()
    .then(() => {
        console.log('\n\n Banco Conectado');
    })
    .catch(erro => {
        console.log(erro);
    });

app.use(userRoutes);

app.listen(3000, () => {
    console.log('Servidor aberto');
});

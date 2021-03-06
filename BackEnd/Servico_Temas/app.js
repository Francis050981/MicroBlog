const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const port = 7000

//Importar as rotas
const rotaUsuario = require('./rotas/usuario_rotas');
const rotaTema = require('./rotas/tema_rotas');

//Importar o usuario_controller para verificar o Token
const usuarioController = require('./controller/usuario_controller');
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Configuração do Mongoose
mongoose.connect('mongodb://localhost:27017/app_microBlog')
  .then(() => { 
    console.log('BD conectado')
  }).catch((error) => {
    console.log('Erro ao conectar ao BD')
  });

app.use((req, res, next) => {
  console.log(`Request Time: ${Date.now()}`);
  console.log(`Request Method: ${req.method}`);
  next();
})

//Uso das rotas
app.use('/api/temas', usuarioController.validaToken, rotaTema);
app.use('/api/usuarios', rotaUsuario);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
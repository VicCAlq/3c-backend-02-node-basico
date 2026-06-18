/*
  * [ATIVIDADE 2 - Enviar arquivo HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/index".
  *
  * Ao acessar esta rota, deve ser enviado o arquivo 
  * "indexAtividade.js" de dentro da pasta src:
  */

const express = require("express")
const app = express()
const path = require('path');
app.use(express.static(path.join(__dirname, 'src')));

const porta = 3000

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "indexAtividade.html"))
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})
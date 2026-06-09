/*
  * [ATIVIDADE 2 - Enviar arquivo HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/index".
  *
  * Ao acessar esta rota, deve ser enviado o arquivo 
  * "indexAtividade.js" de dentro da pasta src:
  */

const express = require('express');


const path = require('path');

const app = express();


app.use(express.json());

app.use(express.static(path.join(__dirname, 'src')));

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtividade.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

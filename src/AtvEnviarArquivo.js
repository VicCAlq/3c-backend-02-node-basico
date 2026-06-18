/*
  * [ATIVIDADE 2 - Enviar arquivo HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/index".
  *
  * Ao acessar esta rota, deve ser enviado o arquivo 
  * "indexAtividade.js" de dentro da pasta src:
  */

const express = require('express')
const path = require('path');

const app =  expres();

app.get('/index', (req, res) => {
  res.sendefile(path.join(__dirname, 'src','indexAtividade.js'))
});

app.listen(3000, () => {
  console.log('servidor rodando na 3000')
})
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
const app = express();
const port = 2412;


app.get('/index', (req, res) => {
  res.sendFile (path.join(src, 'indexAtividade.html')
)
});
app.listen (2412 , () => {
  console.log('Acesse http://localhost:2412/index');
});




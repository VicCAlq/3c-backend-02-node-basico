/*
  * [ATIVIDADE 3 - Enviar JSON]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/objeto".
  *
  * Ao acessar esta rota, deve ser enviado o conteúdo JSON abaixo:
  *
  * {
  *   acesso: "OK",
  *   titulo: "Responda a pergunta abaixo:",
  *   pergunta: "Quem é mais redondo, o Kirby ou o Jigglypuff?",
  * }
  */

const express = require('express');


const path = require('path');

const app = express();


app.use(express.json());

app.use(express.static(path.join(__dirname, 'src')));



app.get('/objeto', (req, res) => {
  res.json({
    titulo: "Responda a pergunta abaixo:",
    conteudo: "Quem é mais redondo, o Kirby ou o Jigglypuff?"
  });
});
app.get('/objeto', (req, res) => {
  res.send(`
   <html>
      <head>
        <title>Exemplo de página</title>
      </head>
      <body>
        <h1>Você acessou a página de início!</h1>
        <p>Passe um PIX de 1 real como pedágio :D</p>
      </body>
    </html>
    `);
});
app.get("/index1", (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtividade.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
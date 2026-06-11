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
const app = express();
const port = 2405;
app.use(express.json());


app.get('/objeto' , (req, res) => {
    res.json({
    acesso: "OK",
   titulo: "Responda a pergunta abaixo:",
  pergunta: "Quem é mais redondo, o Kirby ou o Jigglypuff?",
    })
})


app.listen (2405 , () => {
  console.log('Acesse http://localhost:2405/objeto');
});


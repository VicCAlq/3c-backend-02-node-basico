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
const porta = 3000

app.get("/inicio", (req, res) => {
  res.send(`<html>
      <head>
        <title>Exemplo de página</title>
      </head>
      <body>
        <h1>Você acessou a página de início!</h1>
        <p>Passe um PIX de 50 real como pedágio niga</p>
      </body>
    </html>`)
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})

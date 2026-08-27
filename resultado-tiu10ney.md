Data de atualização: Dia 27/8/2026 às 11:37 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| Atividade 2 - Enviar arquivo HTML | GET /index responde com status 200 | ✅ | ✅ | Sem erros |
| Atividade 2 - Enviar arquivo HTML | GET /index envia o arquivo indexAtividade.html | ✅ | ✅ | Sem erros |
| Atividade 2 - Enviar arquivo HTML | rota inexistente responde com status 404 | ✅ | ✅ | Sem erros |
| Atividade 1 - Enviar HTML | GET /inicio responde com status 200 | ✅ | ✅ | Sem erros |
| Atividade 1 - Enviar HTML | GET /inicio retorna o HTML esperado | ✅ | ❌ | AssertionError: expected '\n\n\n <html>\n      <head><title>Exe…' to contain '<h1>Você acessou a página de início!<…' |
| Atividade 1 - Enviar HTML | rota inexistente responde com status 404 | ✅ | ✅ | Sem erros |
| Atividade 3 - Enviar JSON | GET /objeto responde com status 200 | ✅ | ✅ | Sem erros |
| Atividade 3 - Enviar JSON | GET /objeto retorna o JSON esperado | ✅ | ✅ | Sem erros |
| Atividade 3 - Enviar JSON | rota inexistente responde com status 404 | ✅ | ✅ | Sem erros |
| Atividade 4 - Três Rotas Diferentes | GET /uno responde com status 200 | ✅ | ✅ | Sem erros |
| Atividade 4 - Três Rotas Diferentes | GET /uno retorna o HTML esperado | ✅ | ✅ | Sem erros |
| Atividade 4 - Três Rotas Diferentes | GET /two responde com o arquivo two.html | ✅ | ❌ | AssertionError: expected 404 to be 200 // Object.is equality |
| Atividade 4 - Três Rotas Diferentes | GET /san retorna o JSON esperado | ✅ | ❌ | AssertionError: expected 404 to be 200 // Object.is equality |
| Atividade 4 - Três Rotas Diferentes | rota inexistente responde com status 404 | ✅ | ✅ | Sem erros |

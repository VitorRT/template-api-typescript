# Template para Criações de API's Rest usando Sequelize junto com o Typescript
_Depois de muito tempo pesquisando profundamente em como funciona o sequelize, eu queria passar o modelo classico do Javascript para as aplicações Typescript(Linguagem na qual estou focando bastante ultimamente), porém como agora estamos falando de passar um modelo de back end de uma linguagem fracamente tipada para uma linguagem fortemente tipada, toda a estrutura irá mudar um pouco, talvez até bastante._

_Pretendo fazer um vídeo rápido explicando o modelo, porque acho que será melhor do que explicar por aqui. Quando o vídeo estiver pronto eu vou deixar o link aqui para vocês assistirem! Enquanto isso, sinta-se a vontade para usar o projeto, só não se esqueça de algumas coisas:_

## Vai usar? 🗨
- Primeiro: Instale a pasta `node_modules` rodando o comando `npm install` ou `yarn` na pasta raiz do projeto
- Segundo: Adicione um arquivo `.env` na pasta raiz do projeto com as configurações do seu banco de dados. No arquivo, adicione essas configurações:
    - DB_NAME= nome do seu banco (ex: worldgeek)
    - DB_USER= username do seu banco (ex: root)
    - DB_PWD= a senha do seu banco (ex: adm123)
    - DB_HOST= o hostname do seu banco (ex: localhost)
    - DB_PORT= a porta do seu banco (ex: 8080)
    - DB_DRIVER= o dialeto/nome do seu banco (ex: mysql)
    - NODE_ENV=development ( isso é pra deixar claro que seu banco é de desenvolvimento, nao de produção. Eu recomendo que você deixe desse jeito)
- Terceiro: Monte sua API Rest e seja feliz! 😁
> <small>by: VitorRT 💌 </small>
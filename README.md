### Opa, prazer! Meu nome é Vitor  🧏🏾‍♂️
> Sou um desenvolvedor back-end com mentalidade de growth! <a href="https://linktr.ee/VitorRT" target="_blank">Vem me conhecer <a/> um pouco mais, tenho certeza que você vai gostar 😉

# Template para Criações de API's Rest usando Sequelize junto com o Typescript
_Depois de muito tempo pesquisando profundamente em como funciona o sequelize, eu queria passar o modelo classico do Javascript para as aplicações Typescript(Linguagem na qual estou focando bastante ultimamente), porém como agora estamos falando de passar um modelo de back end de uma linguagem fracamente tipada para uma linguagem fortemente tipada, toda a estrutura irá mudar um pouco, talvez até bastante._

_Pretendo fazer um vídeo rápido explicando o modelo, porque acho que será melhor do que explicar por aqui. Quando o vídeo estiver pronto eu vou deixar o link aqui para vocês assistirem! Enquanto isso, sinta-se a vontade para usar o projeto, só não se esqueça de algumas coisas:_

### 🗨 Vai usar? 
1. Baixe o projeto com o `git clone ...` ou em `.zip`.
2. Abra o terminal dentro da pasta do projeto e digite `npm install` ou `yarn` para instalar o node_modules.
3. Adicione um arquivo `.env` na pasta raiz do projeto com as configurações do seu banco de dados. No arquivo, adicione essas configurações:
    - DB_NAME= nome do seu banco (ex: worldgeek)
    - DB_USER= username do seu banco (ex: root)
    - DB_PWD= a senha do seu banco (ex: adm123)
    - DB_HOST= o hostname do seu banco (ex: localhost)
    - DB_PORT= a porta do seu banco (ex: 8080)
    - DB_DRIVER= o dialeto/nome do seu banco (ex: mysql)
    - NODE_ENV=development ( isso é pra deixar claro que seu banco é de desenvolvimento, nao de produção. Eu recomendo que você deixe desse jeito)
4. Rode o comando `npm run build` ou `yarn build` para converter todo o projeto typescritp para o javascript. Jajá você vai entender o motivo.
5. Rode o comando `npm run dev` ou `yarn dev` e espere o servidor ficar online.
6. Se você for querer rodar algum seeder do sequelize, rode o comando `npx sequelize-cli db:seed:all` ou `yarn sequelize-cli db:seed:all`. (**SEMPRE RODE ANTES O `npm run build` ou `yarn build` SE FOR USAR ALGUM COMANDO DO SEQUELIZE-CLI**)
7. Monte a sua API REST e seja feliz! 😁☕
> <small>by: VitorRT 💌<small/>

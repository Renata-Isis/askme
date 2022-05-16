EJS 
<%= %>: Exibir variavel

Condicional:

<% if(variavel){%>
  html
<%}else {%>
  outro html
<%}%}

<% include('.partials/header.ejs')%>
Bootstrap 

class="form-control" estila formulários

### npm install body-parser --save

### npm install --save sequelize

### npm install --save mysql2

Criando banco de dados Workbeach:
New Schema: aply

Visão Geral:
Index.js: criei o servidor e as rotas get e post, bem como renderizei meu html e css atráves do EJS, com o res.render();

Chamei o body-parser para conseguir pegar as requisções do formulário

Chamei a conexão com o banco de dados criado no database

Views e Public: Front end

Database: Conexão com o banco atráves da função sync e define do sequelize

Função create() é equivalente ao insert to no sql

findAll({raw: true}): Findall trás tudo que foi salvo no meu banco, e raw traz apenas o que é esseencial

 <% perguntas.forEach(pergunta=> { %>
          <br>
          <div class="card">
            <div class="card-body">
              <h3>
                <%= pergunta.titulo %>
              </h3>
            </div>

            <div class="card-footer">
              <a href="/pergunta/<%= pergunta.id %>"><button class="btn btn-primary">Responder</button></a>
            </div>
            <% }) %>
          </div>
//Código que que mostra as páginas de forma dinamica, em razão do looping e a da identificação de variaveis pelo EJS, como pergunta.id



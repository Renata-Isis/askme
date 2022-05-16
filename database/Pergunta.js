const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('pergunta', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

//Criando tabela caso ela não exista no SQL
Pergunta.sync({force: false}).then(()=> {});

module.exports = Pergunta;
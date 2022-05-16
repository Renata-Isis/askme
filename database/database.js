const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'ren@150293', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;
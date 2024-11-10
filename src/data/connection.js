const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({path: '../.env'})

const conn = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
  })

module.exports = conn;
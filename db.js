const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'SQLFML',
  database: process.env.DB_NAME || 'nutrition_tracker',
  dateStrings: true 
};

function openConnection() {
  return mysql.createConnection(dbConfig);
}

module.exports = { openConnection };

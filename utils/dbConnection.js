const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.101.69.8',
  user: 'root',
  password: 'k(zCgTgk#9N4ktm*',
  database: 'food_inventory',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});

module.exports = connection;

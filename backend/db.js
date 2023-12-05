const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root1',
  password: '19072005',
  database: 'cars',
});

db.connect((err) => {
  if (err) {
    console.error('Error with connection to database' + err.stack);
    return;
  }
  console.log('Connected to database ' + db.threadId);
});

module.exports = db;
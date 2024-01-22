const mysql = require('mysql2');
const crypto = require('crypto');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'Temp',
  password: '1111',
  database: 'shop_kids',
});

const insert = (email, password) => {
  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    const sql = 'insert into shop_kids.registration (email, password) values (?)'
    const values = [email, `${crypto.createHash('md5').update(password).digest('hex')}`];
    con.query(sql, [values], (err, result) => {
      if (err) throw err;
      console.log('1 record inserted ', result);
    });
  });
};

export default insert;

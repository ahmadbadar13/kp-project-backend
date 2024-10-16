const mysql = require('mysql');

// Konfigurasi koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bz4kzerb13skvzsklu2n'
});

// const db = mysql.createConnection({
//     host: 'bz4kzerb13skvzsklu2n-mysql.services.clever-cloud.com',
//     user: 'uteofvtkhgj76a2o',
//     password: 'WW8UkNEM2x3438ppvsUv',
//     database: 'bz4kzerb13skvzsklu2n'
// });

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to database');
    }
});

module.exports = db;

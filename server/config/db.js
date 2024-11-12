const mysql = require('mysql');

// Konfigurasi koneksi database
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'db_project_kpu'
// });

const db = mysql.createConnection({
    host: 'bbjyah058htu46i4dpdw-mysql.services.clever-cloud.com',
    user: 'ulezqu8v6xvuqbso',
    password: 'BreZTvluF7LxIrfsIjVG',
    database: 'bbjyah058htu46i4dpdw'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to database');
    }
});

module.exports = db;

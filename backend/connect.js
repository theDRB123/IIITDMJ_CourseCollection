const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dhruv001',
    database: 'iiitdmj_coursecollection'
})



connection.connect((err) => {
    if(err) throw err;
    console.log("connected to database");
})


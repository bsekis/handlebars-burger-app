// dependencies:
const mysql = require('mysql');

// load env variables
require('dotenv').config();


// create connection to DB: if deployed on heroku, connect on there, otherwise set up localhost
const connection = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    port: 3306,
    user: b758e86cc17f27,
    password: 6ee723d7,
    database: heroku_9248967346830eb
  });

  //export connection so other files can use
  module.exports = connection;
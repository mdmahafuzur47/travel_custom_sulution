// get the client
const mysql = require("mysql2");
let cached = null;
// Create the connection pool. The pool-specific settings are the defaults
const DataBase = async () => {

  if(cached){
    return cached;
  };

  try {
    const pool = mysql.createPool({
      host: "localhost",
      user: "root",
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
      idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
    cached = pool.promise();
    return pool.promise();
  } catch (error) {
    console.log("database connection error DBpoll file => ", error);
    return false;
  }
};

module.exports =  DataBase;

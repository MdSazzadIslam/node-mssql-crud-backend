"use strict";

require("dotenv").config({ path: "../.env" });
const sql = require("mssql/msnodesqlv8");

const config = {
  database: process.env.DATABASE,
  server: process.env.SERVER,
  driver: process.env.DRIVER,
  options: {
    trustedConnection: true,
  },
};
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

module.exports = {
  sql,
  poolPromise,
};

/* exports.db = function () {
  try {
    var dbConfig = {
      user: "sa", // SQL Server Login
      password: "system", // SQL Server Password
      server: "DESKTOP-I5BV89K", // SQL Server Server name
      database: "bmrsecom", // SQL Server Database name
    };
    return dbConfig;
  } catch (error) {
    console.error("Connection fail", error);
    process.exit(1);
  }
}; */

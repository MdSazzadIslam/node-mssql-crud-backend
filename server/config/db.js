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

import mysql from "serverless-mysql";

export const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "min1547",
    port: "3306",
    database: "cmc_project_db",
  },
});

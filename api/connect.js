import mysql from "mysql";

export const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "caio123",
  database: "suatiweb",
});

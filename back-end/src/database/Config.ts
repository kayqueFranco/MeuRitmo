import mysql from  "mysql2"

export const conexao = mysql.createConnection({
    host:"127.0.0.1",
    port:3308,
    user:"root",
    password:"123456",
    database:"dbmeuritmo"
})
import mysql from 'mysql2'
import fs from 'fs'
import { CREDENTIALS } from './src/constants.js'
import {
    createDb,
    createTables,
    insertTables,
    dropTable,
    createAllCSV,
} from './src/functions.js'

// https://www.w3schools.com/nodejs/nodejs_mysql.asp

const con = mysql.createConnection(CREDENTIALS)

con.connect(function (err) {
    if (err) throw err

    // createDb(con)
    // dropTable(con)
    // createTables(con)
    // insertTables(con)
    // createAllCSV(con)
})

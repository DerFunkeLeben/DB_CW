import mysql from 'mysql2'
import fs from 'fs'
import { CREDENTIALS } from './src/constants.js'
import { createDb, createTables, insertTables, createCSV } from './src/functions.js'
import { selectAllDocs } from '../sql/select.js'

// https://www.w3schools.com/nodejs/nodejs_mysql.asp

const con = mysql.createConnection(CREDENTIALS)

con.connect(function (err) {
    if (err) throw err

    // createDb(con)
    // createTables(con)
    // insertTables(con)
    createCSV(con, selectAllDocs, 'allDocs.csv')
})

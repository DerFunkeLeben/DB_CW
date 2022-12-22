import mysql from 'mysql2'
import fs from 'fs'
import { CREDENTIALS } from './src/constants.js'

import {
    createDb,
    createTables,
    insertTables,
    dropTable,
    createAllCSV,
    createCSV,
} from './src/functions.js'
import {
    selectBySpecialty,
    selectOnExperience,
    selectPolyclinicMSK,
    selectOrgsFilteredBySpec,
    selectOnRegion,
} from './sql/select.js'

// https://www.w3schools.com/nodejs/nodejs_mysql.asp

const con = mysql.createConnection(CREDENTIALS)

con.connect(function (err) {
    if (err) throw err

    // createDb(con)
    // dropTable(con)
    // createTables(con)
    // insertTables(con)
    // createAllCSV(con)

    // 1
    // createCSV(con, selectBySpecialty('челюстно-лицевой хирург'), `select/1.csv`)
    // 2
    // createCSV(con, selectOnExperience(10), `select/2.csv`)
    // 3
    // createCSV(con, selectPolyclinicMSK(), `select/3.csv`)
    // 4
    // createCSV(con, selectOrgsFilteredBySpec('стоматолог-хирург'), `select/4.csv`)
    // 5
    // createCSV(con, selectOnRegion('Санкт-Петербург'), `select/5.csv`)
})

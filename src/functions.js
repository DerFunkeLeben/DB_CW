import fs from 'fs'

import { createAll } from '../sql/create.js'
import { insertAll } from '../sql/insert.js'

export const createDb = con => {
    con.query('CREATE DATABASE docs', function (err, result) {
        if (err) throw err
        console.log('Database created')
    })
}

export const createTables = con => {
    createAll.map(query => {
        con.query(query, function (err, result) {
            if (err) throw err
            console.log('Table created')
        })
    })
}

export const insertTables = con => {
    insertAll.map(query => {
        con.query(query, function (err, result) {
            if (err) throw err
            console.log('Table inserted successfully')
        })
    })
}

export const createCSV = (con, query, fileName) => {
    con.query(query, function (err, result) {
        if (err) throw err

        let csvText = ''

        const headers = Object.keys(result[0])
        csvText += headers.join(',')
        csvText += '\n'
        console.log(result)

        result.forEach(doc => {
            const row = Object.values(doc)
            csvText += row.join(',')
            csvText += '\n'
        })

        fs.writeFileSync(`./csv/${fileName}`, csvText)
    })
}

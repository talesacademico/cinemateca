const pgp = require('pg-promise')()
const db = pgp({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    database: 'cinemateca',
    port: '5432'
})

module.exports = db
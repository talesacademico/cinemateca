const database = require('../infra/database')

exports.getFilmes = () => {
    return database.query('select * from cinemateca.filmes')
}

exports.createMovies = async (movie) => {
    try {
        const { id, title, director, year, genre } = movie
        const psql = `INSERT INTO cinemateca.filmes
            (id, title, director, year, genre) VALUES($1, $2, $3, $4, $5)`
        await database.query(psql, [id, title, director, year, genre])
        return { message: "Insersão com sucesso!" }
    } catch (error) {
        return error
    }
}

exports.updadeteMovies = async (movies) => {
    try {
        const { id, title, director, year, genre } = movies
        const values = [title, director, year, genre, id]
        const pgsql = `UPDATE cinemateca.filmes SET
        title=$1, director=$2, year=$3, genre=$4 WHERE id=$5`
        return await database.query(pgsql, values)
    } catch (error) {
        return error
    }

}
exports.deleteMovies = async (id) => {
    const psql = "DELETE FROM cinemateca.filmes WHERE id = $1"
    try {
        return await database.query(psql, [id])
    } catch (error) {
        return error
    }
}
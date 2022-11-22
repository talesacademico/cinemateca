const {
    getMovies,
    createMovies,
    deleteMovies,
    updadeteMovies
} = require('./movies')

const {itsWorks} = require('./itsWorks')

const defineRouters= (app) => {
    app.get('/', itsWorks)
    app.get('/movies', getMovies)
    app.post('/movies', createMovies)
    app.delete('/movies/:id', deleteMovies)
    app.put('/movies/:id', updadeteMovies)
}

module.exports = {defineRouters}
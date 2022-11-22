const moviesData = require('../data/moviesData')

exports.getFilmes = () =>{
    return moviesData.getFilmes()
}

exports.createMovies = (data) =>{
    return moviesData.createMovies(data)
}

exports.deleteMovies = (id) =>{
    return moviesData.deleteMovies(id)
}

exports.updateMovies = (movie) =>{
    return moviesData.updadeteMovies(movie)
}
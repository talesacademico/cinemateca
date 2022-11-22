const moviesService = require('../service/moviesService')

const getMovies = async (req, res) => {
	const result = await moviesService.getFilmes()
	return res.json(result)
}

const createMovies = async (req, res) => {
	const movie = req.body
	const result = await moviesService.createMovies(movie)
	return res.json(result)
}

const deleteMovies = async (req, res) => {
	const { id } = req.params
	const result = await moviesService.deleteMovies(id)
	return res.json(result)
}

const updadeteMovies = async (req, res) => {
	const movie = req.body
	const { id } = req.params
	const value = { ...movie, id }
	const result = await moviesService.updateMovies(value)
	return res.json(result)
}

module.exports = {
	getMovies,
	createMovies,
	deleteMovies,
	updadeteMovies
}


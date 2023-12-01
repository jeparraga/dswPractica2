const Movie = require('../models/movie.model');

exports.getMovies = async(req, res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json(
            {
                message: 'Consulta de Peliculas',
                data: movies
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: 'Error al consultar',
                data: error
            }
        );
    }
}

exports.getMovieById = async(req, res) => {
    const movieId = req.params.movieId;
    try{
        const movie = await Movie.findById(movieId);
        return res.status(200).json(
            {
                message: 'Consulta de peliculas por ID',
                data: movie
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: 'Error al consultar',
                data: error
            }
        );
    }
}

exports.newMovie = async(req, res) => {
    try {
        const{titulo,director,clasificacion,genero,duracion} = req.body;
        const newMovie = new Movie({titulo,director,clasificacion,genero,duracion});
        await newMovie.save();
        return res.status(200).json(
            {
                message: 'Pelicula creada',
                data: newMovie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al crear',
                data: error
            }
        );
    }
}

exports.updateMovie = async(req, res) => {
    const movieId = req.params.movieId;
    const newData = req.body;
    try {
        const updateMovie = await Movie.findByIdAndUpdate(movieId, newData, {new: true});
        return res.status(200).json(
            {
                message: 'Pelicula Actualizada',
                data: updateMovie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al Actualizar',
                data: error
            }
        );
    }
}

exports.deleteMovie = async(req, res) => {
    const movieId = req.params.movieId;
    try {
        await Movie.findByIdAndDelete(movieId);
        return res.status(200).json(
            {
                message: 'Pelicula Eliminada'
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al Eliminar',
                data: error
            }
        );
    }
}
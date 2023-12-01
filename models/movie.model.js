const mongose = require('mongoose');

let movieSchema = new mongose.Schema({
    titulo: {type:String},
    director: {type:String},
    clasificacion: {type:String},
    genero: {type:String},
    duracion: {type:Number}
});
module.exports = mongose.model('Movie', movieSchema, 'movie');
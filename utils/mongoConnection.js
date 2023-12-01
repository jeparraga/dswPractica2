const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jesus:1234@cluster0.01mzbko.mongodb.net/peliculaweb?retryWrites=true&w=majority').then(
    ()=>console.log('Conexion exitosa')).catch(err=>console.error('Error al conectar', err))

module.exports = mongoose;
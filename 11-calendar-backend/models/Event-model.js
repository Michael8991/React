const { Schema, model } = require('mongoose');

const EventSchema = Schema({
    userID: { // Relación con el usuario que crea el evento
        type: Schema.Types.ObjectId, // Aquí se almacena el ID del usuario
        ref: 'User', // Debe coincidir con el nombre del modelo del usuario
        required: true
    },
    userName: {  // Nuevo campo para almacenar el nombre directamente
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true
    },
    body: {
        type: String
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true
    },
})

module.exports = model('Event', EventSchema);
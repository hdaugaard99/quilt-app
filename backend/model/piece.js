const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Piece = new Schema({
    piece_name: {
        type: String
    },
    shape: {
        type: String
    },
    dimensions: {
        type: String
    },
    units: {
        type: String
    },
    amount: {
        type: String
    },
    blockId: {
        type: String
    }
}, {
    collection: 'quilts'
})

module.exports = mongoose.model('Piece', Piece)
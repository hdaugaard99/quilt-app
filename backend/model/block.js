const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Block = new Schema({
    block_name: {
        type: String
    },
    dimensions: {
        type: String
    },
    units: {
        type: String
    },
    numOfPieces: {
        type: String
    },
    quiltId: {
        type: String
    }
}, {
    collection: 'quilts'
})

module.exports = mongoose.model('Block', Block)
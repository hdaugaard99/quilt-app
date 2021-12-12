const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Quilt = new Schema({
    quilt_name: {
        type: String
    },
    quilt_type: {
        type: String
    },
    numOfBlocks: {
        type: String
    },
    quiltId:{
        type: String
    }
        
}, {
    collection: 'quilts'
})

module.exports = mongoose.model('Quilt', Quilt)
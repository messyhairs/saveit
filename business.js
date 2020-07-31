const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    storytitle: {
        type: String
    },
    avatarurl: {
        type: String
    },
    explainstory: {
        type: String
    }
}, {
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
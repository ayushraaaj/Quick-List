// const { text } = require('body-parser');
const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const List = mongoose.model('List', createSchema);

module.exports = List;
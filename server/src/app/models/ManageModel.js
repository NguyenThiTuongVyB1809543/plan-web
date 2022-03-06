const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Courese = new Schema({
    name: { type: String, maxlength: 255},
    time: { type: Number}
});

module.exports = mongoose.model('Courese', Courese );
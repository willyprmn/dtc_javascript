var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = Schema({
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    keterangan: {
        type: String,
        require: true
    }
});

var Course = module.exports = mongoose.model('Course', courseSchema);
const mongoose = require('mongoose');

const schema = mongoose.Schema;


const UrlSchema = new schema({
    hash : {
        type : String,
        unique : true
    },
    url : {
        type : String
    }
});

module.exports = mongoose.model('Url',UrlSchema);
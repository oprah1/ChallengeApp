const mongoose = require("mongoose");

let CarnetSchema = new mongoose.Schema({
    incription:{
        type: String
    },
    connection:{
        type: Boolean
    },
    password:{
        type: String
    },
    race:{
        type: String
    },
    famille:{
        type: String
    },
    age:{
        type: String
    },
    nourriture:{
        type: String
    },
});

module.exports = mongoose.model('CarnetBoard', CarnetSchema);
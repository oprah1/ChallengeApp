const mongoose = require("mongoose");
const server = "mongodb://root:webweb1@ds159574.mlab.com:59574/carnet"

class database {
    constructor(){
        this._connect()
    }

    _connect() {
        mongoose
        .connect(`${server}`)
        .then(() => {
            console.log('server connecté')
        })
        .catch(err => {
            console.error("connection échoué");
        })
    }
}

module.exports = new database();
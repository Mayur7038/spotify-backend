const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect(
        "mongodb+srv://spotify:1BnVLYGdEMkcKfl4@cluster0.w9cpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
}

module.exports = connect;
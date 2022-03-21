const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://saurabh:saurabh123@cluster0.hmdwt.mongodb.net/evl2?retryWrites=true&w=majority";

const connect = () => {
    return mongoose.connect(DB_URL);
}

module.exports = connect;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title:{ type: String},
    status:{ type: Boolean, default:false},
    subTask: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTask"
    },
});
const User = mongoose.model("users", userSchema);
module.exports = User;
const mongoose = require("mongoose");

const subTaskSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

let SubTask=  mongoose.model("subTask", subTaskSchema);
module.exports = SubTask;
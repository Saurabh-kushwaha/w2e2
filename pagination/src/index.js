const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require("./config/db");
const userControlar = require("../src/controlar/user.controlar")
const subTaskControlar = require("../src/controlar/subTask.controlar")
const PORT = 8000;
let app = express();
app.use(express.json());
app.use(cors());

app.use("/tasks", userControlar);
app.use("/subTask", subTaskControlar);

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Sever on that ${PORT}`);
    } catch(e) {
        console.log(e.message);
    }
});
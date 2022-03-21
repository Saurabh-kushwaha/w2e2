const express = require("express");
const SubTask = require("../model/subTask.model");
let router = express.Router();

router.get("/:id", async (req, res) => {
    let subTask = await SubTask.findById(req.params.id);
    res.status(200).json(subTask); 
});
router.get("/", async (req, res) => {
    let subTask = await SubTask.find();
    res.status(200).json(subTask); 
});
router.post("/", async (req, res) => {
    try {
      let createUser = await SubTask.create(req.body);
      res.status(200).json(createUser);   
    }catch(e){
        console.log(e.message);
        res.status(200).send(e.message);
    }
})
module.exports = router;


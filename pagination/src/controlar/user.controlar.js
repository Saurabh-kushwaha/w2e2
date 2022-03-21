const express = require("express");
const User = require("../model/user.model");
let router = express.Router();

router.get("/", async (req, res) => {
    const { page = 1, pageSize = 3 } = req.query;
    let offset = (page - 1) * pageSize;
    const getAll = await User.find().skip(offset).limit(pageSize);
    const totalPage = Math.ceil( await User.find().countDocuments() / pageSize);
    res.status(200).json({getAll,totalPage});
});

router.get("/:id", async (req, res) => {
    let users = await User.findById(req.params.id);
    res.status(200).json(users); 
});

router.patch("/:id", async (req, res) => {
    let users = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(users); 
});

router.post("/", async (req, res) => {
    try {
      let createUser = await User.create(req.body);
      res.status(200).json(createUser);   
    }catch(e){
        console.log(e.message);
        res.status(200).send(e.message);
    }
})

router.delete("/:id", async (req, res) => {
    let users = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(users); 
});

module.exports = router;
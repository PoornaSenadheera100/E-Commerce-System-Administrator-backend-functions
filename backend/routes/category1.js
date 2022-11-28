const router = require("express").Router();
let Category1 = require("../models/Category1");

router.route("/add").post((req, res)=>{
    const name = req.body.name;

    const newCategory1 = new Category1({
        name
    })

    newCategory1.save().then(()=>{
        res.json("Category1 Added.");
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;
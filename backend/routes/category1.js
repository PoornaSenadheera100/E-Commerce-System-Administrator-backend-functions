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

router.route("/").get((req, res)=>{
    Category1.find().then((category1)=>{
        res.json(category1);
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req, res)=>{
    let category1Id = req.params.id;
    const {name} = req.body;
    const updateCategory1 = {
        name
    }

    const update = await Category1.findByIdAndUpdate(category1Id, updateCategory1).then(()=>{
        res.status(200).send({status: "Category1 Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating Category1", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req, res)=>{
    let category1Id = req.params.id;

    await Category1.findByIdAndDelete(category1Id).then(()=>{
        res.status(200).send({status: "Category1 Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete Category1", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let category1Id = req.params.id;
    const category1 = await Category1.findById(category1Id).then((category1)=>{
        res.status(200).send({status: "Category1 fetched", category1})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get category1", error: err.message});
    })
})

module.exports = router;
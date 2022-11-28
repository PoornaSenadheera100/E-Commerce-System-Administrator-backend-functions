const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category1Schema = new Schema({
    name : {
        type : String,
        required : true
    }
})

const Category1 = mongoose.model("Category1", category1Schema);

module.exports = Category1;
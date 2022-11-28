const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category2Schema = new Schema({
    name : {
        type : String,
        required : true
    },
    parent : {
        type : String,
        required : true
    }
})

const Category2 = mongoose.model("Category2", category2Schema);

module.exports = Category2;
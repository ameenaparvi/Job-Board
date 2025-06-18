const mongoose = require('mongoose');

//scheme
var schema=mongoose.Schema({
    title:String,
    company:String,
    location:String,
    role:String,
})

//model craetion
var JobModel=mongoose.model("job",schema)
module.exports=JobModel

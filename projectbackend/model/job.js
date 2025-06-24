const mongoose = require("mongoose");


// Job schema
const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  role: String
});

// Models

const JobModel = mongoose.model("Job", jobSchema);

module.exports =  JobModel;


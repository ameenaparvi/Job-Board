const mongoose = require("mongoose");


// Job schema
const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  role: String,
  description: String,
  postedDate: { type: Date, default: Date.now },
  companyEmail: String,
});

// Models

const JobModel = mongoose.model("Job", jobSchema);

module.exports =  JobModel;


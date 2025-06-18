// Importing
const express = require('express');
require("./connection");
const JobModel = require("./model/job");
var cors=require('cors')

const app = express();
app.use(cors());

// Initialization
app.use(express.json()); // To parse JSON request bodies

// Basic routes
app.get('/hello', (req, res) => {
  res.send('hai');
});

app.get('/trail', (req, res) => {
  res.send('trail message');
});

// Add job
app.post("/add", async (req, res) => {
  try {
    const job = new JobModel(req.body); 
    await job.save();
    res.json({ message: "Job added successfully" });
  } catch (err) {
    console.error("Error adding data:", err.message);
    res.status(400).json({
      message: "Error adding data",
      error: err.message
    });
  }
});


//update
app.put("/update", async (req, res) => {
  try {
    const job = new JobModel(req.body); 
    await job.save();
    res.json({ message: "Job updated successfully" });
  } catch (err) {
    console.error("Error updated data:", err.message);
    res.status(400).json({
      message: "Error updating data",
      error: err.message
    });
  }
});

//Delete
app.delete("/delete", async (req, res) => {
  try {
    const job = new JobModel(req.body); 
    await job.save();
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    console.error("Error deleted data:", err.message);
    res.status(400).json({
      message: "Error deleting data",
      error: err.message
    });
  }
});




// Port set
app.listen(3004, () => {
  console.log("Server is running on port 3004");
});

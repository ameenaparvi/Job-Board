const express = require('express');
const cors = require('cors');
require("./connection");
const JobModel = require("./model/job");
const UserModel = require("./model/user");

const app = express();
app.use(cors());
app.use(express.json());

// Test routes
app.get('/hello', (req, res) => {
  res.send('hai');
});

app.get('/trail', (req, res) => {
  res.send('trail message');
});

// Register user
app.post("/register", async (req, res) => {
  try {
    console.log("Received:", req.body);
    const user = new UserModel(req.body);
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Save failed:", err);
    res.status(400).json({ message: "Registration failed", error: err.message });
  }
});

// Login user
app.post("/login", async (req, res) => {
  const { Name, password } = req.body;
  try {
    const user = await UserModel.findOne({ Name });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
});

// Add job
app.post("/add", async (req, res) => {
  try {
    const job = new JobModel(req.body);
    await job.save();
    res.json({ message: "Job added successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error adding job", error: err.message });
  }
});

// Get all jobs
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await JobModel.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs", error: err.message });
  }
});

// Delete job by ID
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedJob = await JobModel.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ message: "Job not found" });
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting job", error: err.message });
  }
});

//Update job by ID
app.put("/update/:id", async (req, res) => {
  try {
    const updatedJob = await JobModel.findByIdAndUpdate(req.params.id,req.body,{ new: true });
    res.json({ message: "Job updated successfully", updatedJob });
  } catch (err) {
    res.status(400).json({ message: "Error updating job", error: err.message });
  }
});


// Start server
app.listen(3004, () => {
  console.log("Server is running on port 3004");
});

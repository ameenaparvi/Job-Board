const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aleena8891312026:aleena@cluster0.ozt1ny0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})
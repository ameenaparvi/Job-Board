const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ameenaparvin5:Ameena@cluster0.qeooljm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})
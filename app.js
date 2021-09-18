const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()

 mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.03rel.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
//  mongoose.connect("mongodb+srv://Sasmitha:Sashmu@cluster0.03rel.mongodb.net/school_studen?retryWrites=true&w=majority")
.then((result)=>console.log('Connected to MONGO ATLAS'))
   .catch((err) => console.log(err))

app.use(express.json())

app.use("/api/students", require("./routes/students.routes.js"));
app.use("/api/schools", require("./routes/schools.routes.js"));

app.listen(5000, () => {
      console.log("Connected in Port 5000")
   })
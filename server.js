const express = require('express');
const mongoose = require('mongoose');

const students = require('./routes/api/students');

const app = express();
app.use(express.json());

const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongo connected...'))
  .catch(err => console.log(err));

//use routes
app.use('/api/students', students);

//run server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
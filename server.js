const express = require('express');
const mongoose = require('mongoose');

const students = require('./routes/api/students');
const schoolSearch = require('./routes/api/schoolSearch');
const grades = require('./routes/api/grades');

const app = express();
app.use(express.json());

const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongo connected...'))
  .catch(err => console.log(err));

//use routes
app.use('/api/students', students);
app.use('/api/', schoolSearch);
app.use('/api/', grades);


//run server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
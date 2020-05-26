const express = require('express');
const mongoose = require('mongoose');

const allSchools = require('./routes/api/allSchools');
const schoolSearch = require('./routes/api/schoolSearch');
const grades = require('./routes/api/grades');
const csvData = require('./routes/api/csvData');
const path = require('path');

const app = express();
app.use(express.json());

const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongo connected...'))
  .catch(err => console.log(err));

//use routes
app.use('/api/allSchools', allSchools);
app.use('/api/', schoolSearch);
app.use('/api/', grades);
app.use('/api/', csvData);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder 
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

//run server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
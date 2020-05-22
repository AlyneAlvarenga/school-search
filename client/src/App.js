import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SchoolData from './SchoolData';
import './App.css';

const App = () => {
  // useEffect(() => {
  //   axios.get('/api/students').then(res => console.log(res));
  // }, [])
  const [schoolInput, setSchoolInput] = useState('');
  const [schoolQuery, setSchoolQuery] = useState([]);

  const handleChange = (e) => {
    setSchoolInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.get(`/api/${schoolInput}`)
      .then(response => {
        console.log(response.data)
        setSchoolQuery(response.data);
      })
    
      setSchoolInput('');
  }

  return (
    <div className="App">
      <h1>School Search</h1>
      <form method="GET" onSubmit={handleSubmit}>
        <input type="text" name="school" value={schoolInput} placeholder="School" onChange={handleChange} />
        <button>Submit</button>
      </form>
      {
        schoolQuery.length !== 0 
          ? 
            <>
            <h2>{schoolQuery[0].schoolName}</h2>
            <ul>
              {
                schoolQuery.map(schoolObj => <SchoolData 
                  schoolObj={schoolObj} key={schoolObj._id}
                />)
              }
            </ul>
            </>
          : null
      }
    </div>
  );
}

export default App;

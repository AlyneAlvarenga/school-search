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
        const sorted = response.data.sort((a, b) => {
          const nameA = a.studentLastName.toLowerCase();
          const nameB = b.studentLastName.toLowerCase();

          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
          return 0;
        })
        setSchoolQuery(sorted);
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
            <button>Download Full Report</button>
            <button>Download Grades Only</button>
            <ul>
              {
                schoolQuery.map(schoolObj => <SchoolData 
                  schoolObj={schoolObj} 
                  key={schoolObj._id}
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

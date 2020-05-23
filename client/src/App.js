import React, { useState } from 'react';
import axios from 'axios';
import SchoolData from './SchoolData';
import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import PDFDoc from './PDFDoc';
import SchoolHeader from './SchoolHeader';


const App = () => {
  const [schoolInput, setSchoolInput] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [schoolQuery, setSchoolQuery] = useState([]);
  const [grades, setGrades] = useState([]);
  const [showPDF, setShowPDF] = useState(false);

  const handleChange = (e) => {
    setSchoolInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSchool(schoolInput);
    
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

  const showGradesOnly = () => {
    axios.get(`/api/${currentSchool}/grades`)
      .then(response => setGrades(response.data));

    setShowPDF(true);
  }

  return (
    <div className="App">
      <h1>School Search</h1>
      <form method="GET" onSubmit={handleSubmit}>
        <input type="text" name="school" value={schoolInput} placeholder="School" onChange={handleChange} />
        <button>Submit</button>
      </form>
      {
        !showPDF && schoolQuery.length !== 0
          ? 
            <>
            <SchoolHeader currentSchool={currentSchool} showGradesOnly={showGradesOnly} />
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
      {
        showPDF
          ? 
          <>
            <SchoolHeader currentSchool={currentSchool} showGradesOnly={showGradesOnly} />
            <PDFViewer width={500} height={800}>
              <PDFDoc school={currentSchool} grades={grades} />
            </PDFViewer>
          </>
          : null
      }
    </div>
  );
}

export default App;

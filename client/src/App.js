import React, { useState } from 'react';
import axios from 'axios';
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import SchoolData from './SchoolData';
import SchoolHeader from './SchoolHeader';
import GradesPDF from './GradesPDF';
import FullPDF from './FullPDF';


const App = () => {
  const [schoolInput, setSchoolInput] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [schoolQuery, setSchoolQuery] = useState([]);
  const [grades, setGrades] = useState([]);
  const [isGradesPDF, setIsGradesPDF] = useState(false);
  const [isFullPDF, setIsFullPDF] = useState(false);

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

  const showGradesPDF = () => {
    axios.get(`/api/${currentSchool}/grades`)
      .then(response => setGrades(response.data));

    setIsGradesPDF(true);
    setIsFullPDF(false);

  }

  const showFullPDF = () => {
    setIsFullPDF(true);
    setIsGradesPDF(false);
  }

  return (
    <>
      {
        schoolQuery.length !== 0
          ?
          <SchoolHeader
            currentSchool={currentSchool}
            showGradesPDF={showGradesPDF}
            showFullPDF={showFullPDF}
          />
          : null
      }
      {
        currentSchool === ''
        ?
        <section className="App-searchPage">
          <h1>School Search</h1>
          <form method="GET" onSubmit={handleSubmit}>
          <label htmlFor="school" className="visuallyhidden">Name of School</label>
          <input type="text" name="school" id="school" value={schoolInput} placeholder="School" onChange={handleChange} />
          <button>Submit</button>
          </form>
        </section>
        : null
      }
    <main className="App">
      {
        !isGradesPDF && !isFullPDF
          ? 
            <ul className="App-cardsContainer">
              {
                schoolQuery.map(schoolObj => <SchoolData 
                  schoolObj={schoolObj} 
                  key={schoolObj._id}
                />)
              }
            </ul>
          : null
      }
      {
        isGradesPDF
          ? 
            <PDFViewer width={500} height={700} className="App-pdfViewer">
              <GradesPDF school={currentSchool} grades={grades} />
            </PDFViewer>
          : null
      }
      {
        isFullPDF
          ?
          <PDFViewer width={500} height={700} className="App-pdfViewer">
              <FullPDF schoolQuery={schoolQuery} currentSchool={currentSchool}/>
            </PDFViewer>
          : null
      }
    </main>
    </>
  );
}

export default App;

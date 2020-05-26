import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PDFViewer } from '@react-pdf/renderer';
import Autosuggest from 'react-autosuggest';
import './App.css';
import SchoolData from './SchoolData';
import StudentTable from './StudentTable';
import SchoolHeader from './SchoolHeader';
import GradesPDF from './GradesPDF';
import FullPDF from './FullPDF';


const App = () => {
  const [schoolInput, setSchoolInput] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [allSchools, setAllSchools] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [schoolQuery, setSchoolQuery] = useState([]);
  const [grades, setGrades] = useState([]);
  const [isCards, setIsCards] = useState(false);
  const [isTable, setIsTable] = useState(false);
  const [isGradesPDF, setIsGradesPDF] = useState(false);
  const [isFullPDF, setIsFullPDF] = useState(false);

  useEffect(() => {
    axios.get(`/api/allSchools`).then(res => {
      setAllSchools(res.data);
    })
  }, []);

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : allSchools.filter(school =>
      school._id.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

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
        setCurrentSchool(response.data[0].schoolName);
      }).catch(err => {
        console.log(err);
        alert('No schools found, please try again.')
      })
    
      setSchoolInput('');
      setIsCards(true);
  }

  const showGradesPDF = () => {
    axios.get(`/api/${currentSchool}/grades`)
      .then(response => setGrades(response.data));

    setIsGradesPDF(true);
    setIsFullPDF(false);
    setIsCards(false);
  }

  const showFullPDF = () => {
    setIsFullPDF(true);
    setIsGradesPDF(false);
    setIsCards(false);
    setIsTable(false);
  }

  const showCards = () => {
    setIsFullPDF(false);
    setIsGradesPDF(false);
    setIsTable(false);
    setIsCards(true);
  }

  const showTable = () => {
    setIsFullPDF(false);
    setIsGradesPDF(false);
    setIsCards(false);
    setIsTable(true);
  }

  const handleReset = () => {
    setSchoolQuery([]);
    setCurrentSchool('');
    setGrades([]);
    setIsFullPDF(false);
    setIsGradesPDF(false);
    setIsCards(false);
  }

  return (
    <>
      {
        schoolQuery.length === 0
          ?
            <section className="App-searchPage">
              <div className="App-searchContainer">
                <h1>School Search</h1>
                <form method="GET" onSubmit={handleSubmit}>
                  <label htmlFor="schoolName" className="visuallyhidden">Name of School</label>
                  <Autosuggest
                    inputProps={{
                      placeholder: "Type your school",
                      name: "schoolName",
                      id: "schoolName",
                      value: schoolInput,
                      onChange: (e, { newValue }) => {
                        setSchoolInput(newValue);
                      }
                    }}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) => {
                      if (!value) {
                        setSuggestions([]);
                        return;
                      } else {
                        setSuggestions(getSuggestions(value));
                      }
                    }}
                    onSuggestionsClearRequested={() => {
                      setSuggestions([]);
                    }}
                    getSuggestionValue={(suggestion) => {
                      return suggestion._id;
                    }}
                    renderSuggestion={suggestion => (
                      <div>
                        {suggestion._id}
                      </div>
                    )}
                  />
                  <button>Submit</button>
                </form>
              </div>
            </section>
          : 
            <SchoolHeader
              currentSchool={currentSchool}
              showGradesPDF={showGradesPDF}
              showFullPDF={showFullPDF}
              showCards={showCards}
              showTable={showTable}
              handleReset={handleReset}
            />
      }
      {
        isCards
          ? 
            <main className="App">
              <ul className="App-cardsContainer">
                {
                  schoolQuery.map(schoolObj => <SchoolData 
                    schoolObj={schoolObj} 
                    key={schoolObj._id}
                  />)
                }
              </ul>
            </main>
          : null
      }
      {
        isTable
          ?
            <StudentTable 
              schoolQuery={schoolQuery}
            />
          : null
      }
      {
        isGradesPDF
          ? 
          <main className="App">
            <PDFViewer width={500} height={700} className="App-pdfViewer">
              <GradesPDF school={currentSchool} grades={grades} />
            </PDFViewer>
          </main>
          : null
      }
      {
        isFullPDF
          ?
          <main className="App">
            <PDFViewer width={500} height={700} className="App-pdfViewer">
                <FullPDF schoolQuery={schoolQuery} currentSchool={currentSchool}/>
              </PDFViewer>
            </main>
          : null
      }
    </>
  );
}

export default App;

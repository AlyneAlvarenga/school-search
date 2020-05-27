import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import SearchPage from './SearchPage';
import SchoolData from './SchoolData';
import SchoolHeader from './SchoolHeader';
import StudentCount from './StudentCount';
import StudentTable from './StudentTable';
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

  const sortThis = (arr, key) => {
    return arr.sort((a, b) => {
      const nameA = a[key].toLowerCase();
      const nameB = b[key].toLowerCase();

      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0;
    })
  }

  // When the component mounts, query the DB and get the names of all the schools. Save it to state in order to render options to the input in the SearchPage component
  useEffect(() => {
    axios.get(`/api/allSchools`).then(res => {
      const sorted = sortThis(res.data, "_id");
      setAllSchools(sorted);
    })
  }, []);

  // On form submission, query the DB to fetch all students from that school. Sort them by last name, then save the result to state. Also save the school name to a separate piece of state. Clear the input, display the student table on the browser.
  // If no schools are found, display an alert and clear the input.
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.get(`/api/${schoolInput}`)
      .then(response => {
        const sorted = sortThis(response.data, "studentLastName");
        setSchoolQuery(sorted);
        setCurrentSchool(response.data[0].schoolName);
        setIsTable(true);
      }).catch(err => {
        console.log(err);
        alert('No schools found, please try again.')
      })
    
      setSchoolInput('');
  }

  // Query the DB to get only the subjects + grades from that school. Save that data to state, and display the corresponding PDF. Hide the other components, so that we only see this PDF on the page.
  const showGradesPDF = () => {
    axios.get(`/api/${currentSchool}/grades`)
      .then(response => setGrades(response.data));

    setIsGradesPDF(true);
    setIsFullPDF(false);
    setIsCards(false);
    setIsTable(false);
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
    setIsTable(false);
  }

  return (
    <>
      {
        schoolQuery.length === 0 && currentSchool === ''
          ?
            <SearchPage 
              handleSubmit={handleSubmit}
              schoolInput={schoolInput}
              setSchoolInput={setSchoolInput}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
              allSchools={allSchools}
            />
          : 
            <SchoolHeader
              currentSchool={currentSchool}
              showGradesPDF={showGradesPDF}
              showFullPDF={showFullPDF}
              showCards={showCards}
              showTable={showTable}
              handleReset={handleReset}
              isCards={isCards}
              isTable={isTable}
              isFullPDF={isFullPDF}
              isGradesPDF={isGradesPDF}
            />
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
        isCards
          ? 
            <main className="App App-cardsSection">
              <StudentCount 
                schoolQuery={schoolQuery}
              />
              <section>
                <ul className="App-cardsContainer">
                  {
                    schoolQuery.map(schoolObj => <SchoolData 
                      schoolObj={schoolObj} 
                      key={schoolObj._id}
                    />)
                  }
                </ul>
              </section>
            </main>
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

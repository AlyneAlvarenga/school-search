import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink } from "react-csv";
import './SchoolHeader.css';

const SchoolHeader = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.currentSchool !== '') {
      axios.get(`/api/${props.currentSchool}/csvData`)
      .then(response => {
        setData(response.data);
      })
    }
  }, [props.currentSchool]);

  const headers = [
    { label: "School", key: "schoolName" },
    { label: "First Name", key: "studentFirstName" },
    { label: "Last Name", key: "studentLastName" },
    { label: "Subject", key: "grades.subject" },
    { label: "Grade", key: "grades.grade" },
  ];

  return (
    <header>
      <div className="SchoolHeader-top">
        <h2>{props.currentSchool}</h2>
        <button onClick={props.handleReset}>Change Schools</button>
      </div>
      <ul>
        <li>
          <button onClick={props.showTable} className={props.isTable ? 'selected' : null}>See Student Table</button>
        </li>
        <li>
          <button onClick={props.showCards} className={props.isCards ? 'selected' : null}>See Student Cards</button>
        </li>
        <li>
          <button onClick={props.showGradesPDF} className={props.isGradesPDF ? 'selected' : null}>See Grades as PDF</button>
        </li>
        <li>
          <button onClick={props.showFullPDF} className={props.isFullPDF ? 'selected' : null}>See Full Report as PDF</button>
        </li>
        <li>
          <CSVLink 
            data={data} 
            headers={headers} 
            className="button" 
            filename={"student-report.csv"}
          >
            Download Full Report as CSV
          </CSVLink>
        </li>
      </ul>
    </header>
  )
}

export default SchoolHeader;
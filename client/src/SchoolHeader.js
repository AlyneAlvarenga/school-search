import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink } from "react-csv";
import './SchoolHeader.css';

const SchoolHeader = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/api/${props.currentSchool}/csvData`)
      .then(response => {
        console.log(response.data);

        setData(response.data);
      })
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
          <button onClick={props.showCards}>See Student Cards</button>
        </li>
        <li>
          <button disabled>See Student Table</button>
        </li>
        <li>
          <button onClick={props.showFullPDF}>See Full Report as PDF</button>
        </li>
        <li>
          <button onClick={props.showGradesPDF}>See Grades as PDF</button>
        </li>
        <li>
          <CSVLink data={data} headers={headers} className="button" >
            Download Full Report as CSV
          </CSVLink>
        </li>
      </ul>
    </header>
  )
}

export default SchoolHeader;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink } from "react-csv";

const SchoolHeader = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/api/${props.currentSchool}/csvData`)
      .then(response => {
        console.log(response.data);

        setData(response.data);
      })
  }, []);

  const headers = [
    { label: "School", key: "schoolName" },
    { label: "First Name", key: "studentFirstName" },
    { label: "Last Name", key: "studentLastName" },
    { label: "Subject", key: "grades.subject" },
    { label: "Grade", key: "grades.grade" },
  ];

  return (
    <>
      <h2>{props.currentSchool}</h2>
      <button disabled>See Full Report</button>
      <button disabled>See Full Report as PDF</button>
      <button onClick={props.showGradesOnlyPDF}>See Grades as PDF</button>
      <button onClick={() => console.log(data)}>Clickme</button>
      <CSVLink data={data} headers={headers} >
        Download Full Report as CSV
      </CSVLink>
    </>
  )
}

export default SchoolHeader;